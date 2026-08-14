-- Tabela para salvar respostas dos formulários de coleta
-- Rodar no Supabase do projeto basilicariopreto
CREATE TABLE IF NOT EXISTS formulario_respostas (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  tipo TEXT NOT NULL,
  respondente TEXT NOT NULL,
  respostas JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE formulario_respostas ENABLE ROW LEVEL SECURITY;

-- Permitir inserção por qualquer pessoa (anon) e leitura
CREATE POLICY "anon_insert_formulario" ON formulario_respostas FOR INSERT WITH CHECK (true);
CREATE POLICY "anon_read_formulario" ON formulario_respostas FOR SELECT USING (true);
