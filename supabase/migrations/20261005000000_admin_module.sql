-- Migration: Admin Module Extension para PMV Sisu
-- Descripción: Creación de tablas aisladas para el backoffice universitario sin modificar las existentes.

-- 1. Tabla de Perfiles Administrativos (Personal de la Universidad)
CREATE TABLE IF NOT EXISTS public.admin_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    full_name TEXT,
    role TEXT NOT NULL DEFAULT 'staff' CHECK (role IN ('staff', 'superadmin')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Tabla de Áreas/Facultades de la Universidad
CREATE TABLE IF NOT EXISTS public.univ_areas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Tabla de Carreras
CREATE TABLE IF NOT EXISTS public.univ_careers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    area_id UUID REFERENCES public.univ_areas(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(area_id, name)
);

-- 4. Tabla Puente Estudiante -> Estructura Universitaria (Datos de Identidad)
-- Vincula el user_id (autenticación actual) con la carrera y registra el consentimiento.
CREATE TABLE IF NOT EXISTS public.student_university_data (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    career_id UUID REFERENCES public.univ_careers(id) ON DELETE SET NULL,
    institutional_email TEXT,
    phone_number TEXT,
    has_consented_contact BOOLEAN DEFAULT false,
    consent_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Tabla de Gestión de Casos Clínicos/Administrativos
-- Aislada de los datos crudos del usuario, usada por el staff para seguimiento.
CREATE TABLE IF NOT EXISTS public.admin_student_cases (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    assigned_staff_id UUID REFERENCES public.admin_profiles(id) ON DELETE SET NULL,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'in_progress', 'resolved', 'closed')),
    priority TEXT NOT NULL DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'critical')),
    internal_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. Tabla de Preguntas Dinámicas Institucionales
CREATE TABLE IF NOT EXISTS public.admin_dynamic_questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    question_text TEXT NOT NULL,
    question_type TEXT NOT NULL DEFAULT 'scale_1_5' CHECK (question_type IN ('scale_1_5', 'text', 'boolean')),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==========================================
-- ROW LEVEL SECURITY (RLS)
-- ==========================================

-- Habilitar RLS en todas las tablas nuevas
ALTER TABLE public.admin_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.univ_areas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.univ_careers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_university_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_student_cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_dynamic_questions ENABLE ROW LEVEL SECURITY;

-- Políticas: Solo los admin (staff/superadmin) pueden leer/escribir en estas tablas.
-- Excepción: student_university_data puede ser leída/escrita por el propio estudiante.

-- Función auxiliar para saber si es admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admin_profiles WHERE id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Políticas para admin_profiles
CREATE POLICY "Admins can read all admin profiles" ON public.admin_profiles FOR SELECT USING (public.is_admin());

-- Políticas para univ_areas y univ_careers (Lectura pública para formularios, escritura solo admin)
CREATE POLICY "Anyone can read active areas" ON public.univ_areas FOR SELECT USING (is_active = true);
CREATE POLICY "Admins can manage areas" ON public.univ_areas FOR ALL USING (public.is_admin());

CREATE POLICY "Anyone can read active careers" ON public.univ_careers FOR SELECT USING (is_active = true);
CREATE POLICY "Admins can manage careers" ON public.univ_careers FOR ALL USING (public.is_admin());

-- Políticas para student_university_data (Estudiantes gestionan sus datos, Admins leen todos)
CREATE POLICY "Students can manage their own univ data" ON public.student_university_data FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Admins can read all student univ data" ON public.student_university_data FOR SELECT USING (public.is_admin());

-- Políticas para admin_student_cases (Solo admin)
CREATE POLICY "Admins can manage cases" ON public.admin_student_cases FOR ALL USING (public.is_admin());

-- Políticas para admin_dynamic_questions (Lectura pública si activa, escritura solo admin)
CREATE POLICY "Anyone can read active questions" ON public.admin_dynamic_questions FOR SELECT USING (is_active = true);
CREATE POLICY "Admins can manage questions" ON public.admin_dynamic_questions FOR ALL USING (public.is_admin());
