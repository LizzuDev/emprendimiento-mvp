// js/supabaseClient.js
// Cliente ligero para comunicación directa con la API REST de Supabase

const SUPABASE_BASE_URL = 'https://bjgtoplousxknouxneor.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqZ3RvcGxvdXN4a25vdXhuZW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ4MzQ3OTMsImV4cCI6MjExMDQxMDc5M30.x9NoFdDmqQi8HktWOw7kPRnslLM-o0fZnD5EHTPqjYc';

const headers = {
  'apikey': SUPABASE_ANON_KEY,
  'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=representation'
};

/**
 * Inserta un registro en una tabla de Supabase
 */
export async function supabaseInsert(tableName, data) {
  try {
    const url = `${SUPABASE_BASE_URL}/rest/v1/${tableName}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const errText = await response.text();
      console.warn(`[Supabase Insert Error - ${tableName}]:`, errText);
      return { data: null, error: errText };
    }

    const result = await response.json();
    return { data: result, error: null };
  } catch (err) {
    console.warn(`[Supabase Fetch Exception - ${tableName}]:`, err);
    return { data: null, error: err.message };
  }
}

/**
 * Actualiza un registro en Supabase por una columna específica
 */
export async function supabaseUpdate(tableName, matchColumn, matchValue, data) {
  try {
    const url = `${SUPABASE_BASE_URL}/rest/v1/${tableName}?${matchColumn}=eq.${encodeURIComponent(matchValue)}`;
    const response = await fetch(url, {
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const errText = await response.text();
      console.warn(`[Supabase Update Error - ${tableName}]:`, errText);
      return { data: null, error: errText };
    }

    const result = await response.json();
    return { data: result, error: null };
  } catch (err) {
    console.warn(`[Supabase Update Exception - ${tableName}]:`, err);
    return { data: null, error: err.message };
  }
}

/**
 * Consulta registros en una tabla de Supabase con filtros opcionales
 */
export async function supabaseSelect(tableName, queryParams = '') {
  try {
    const url = `${SUPABASE_BASE_URL}/rest/v1/${tableName}${queryParams ? '?' + queryParams : ''}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    });

    if (!response.ok) {
      const errText = await response.text();
      console.warn(`[Supabase Select Error - ${tableName}]:`, errText);
      return { data: null, error: errText };
    }

    const result = await response.json();
    return { data: result, error: null };
  } catch (err) {
    console.warn(`[Supabase Select Exception - ${tableName}]:`, err);
    return { data: null, error: err.message };
  }
}

