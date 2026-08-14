// Definição dos formulários
const FORMULARIOS = {
  historia: {
    titulo: 'História da Basílica',
    subtitulo: 'Informações sobre a fundação, construção e história da paróquia.',
    secoes: [
      {
        titulo: 'Datas e Fundação',
        campos: [
          { id: 'ano_fundacao', label: 'Qual o ano de fundação/construção da igreja?', tipo: 'text' },
          { id: 'data_inauguracao', label: 'Qual a data de inauguração?', tipo: 'text' },
          { id: 'ano_basilica', label: 'Em que ano foi elevada a Basílica Menor?', tipo: 'text' },
          { id: 'motivo_construcao', label: 'Qual o motivo/história por trás da construção? Quem idealizou?', tipo: 'textarea' },
        ]
      },
      {
        titulo: 'Padres e Párocos',
        campos: [
          { id: 'primeiro_paroco', label: 'Quem foi o primeiro pároco?', tipo: 'text' },
          { id: 'lista_parocos', label: 'Liste os padres/párocos que passaram pela paróquia, com os anos aproximados', tipo: 'textarea', hint: 'Ex: Pe. João da Silva (1950-1965), Pe. José Santos (1965-1980)...' },
          { id: 'paroco_atual', label: 'Quem é o pároco atual? Desde quando?', tipo: 'text' },
          { id: 'bispo', label: 'Quem é o bispo/arcebispo da diocese?', tipo: 'text' },
        ]
      },
      {
        titulo: 'Reformas e Patrimônio',
        campos: [
          { id: 'reformas', label: 'Houve reformas ou ampliações importantes? Quando e o que mudou?', tipo: 'textarea' },
          { id: 'patrimonio', label: 'A basílica possui algum patrimônio artístico (vitrais, imagens, sinos)? Descreva.', tipo: 'textarea' },
          { id: 'curiosidades', label: 'Existe alguma curiosidade histórica ou fato marcante?', tipo: 'textarea' },
        ]
      },
    ]
  },

  sacramentos: {
    titulo: 'Sacramentos',
    subtitulo: 'Informações sobre cada sacramento oferecido na paróquia.',
    secoes: [
      {
        titulo: 'Batismo',
        campos: [
          { id: 'batismo_documentos', label: 'Quais documentos são necessários para o batismo?', tipo: 'textarea' },
          { id: 'batismo_horarios', label: 'Quais os horários/dias disponíveis para batismo?', tipo: 'text' },
          { id: 'batismo_curso', label: 'Existe curso de preparação? Se sim, quando acontece?', tipo: 'text' },
          { id: 'batismo_antecedencia', label: 'Qual a antecedência mínima para agendar?', tipo: 'text' },
          { id: 'batismo_taxa', label: 'Existe alguma taxa? Qual valor?', tipo: 'text' },
          { id: 'batismo_padrinhos', label: 'Requisitos para padrinhos?', tipo: 'textarea' },
        ]
      },
      {
        titulo: 'Matrimônio',
        campos: [
          { id: 'matrimonio_documentos', label: 'Quais documentos são necessários?', tipo: 'textarea' },
          { id: 'matrimonio_antecedencia', label: 'Qual a antecedência mínima para agendar?', tipo: 'text' },
          { id: 'matrimonio_curso', label: 'Existe curso de preparação matrimonial? Quando?', tipo: 'text' },
          { id: 'matrimonio_horarios', label: 'Horários/dias disponíveis para casamento?', tipo: 'text' },
          { id: 'matrimonio_taxa', label: 'Valores e taxas?', tipo: 'text' },
          { id: 'matrimonio_info', label: 'Informações adicionais (decoração, ensaio, etc.)', tipo: 'textarea' },
        ]
      },
      {
        titulo: 'Primeira Eucaristia e Crisma',
        campos: [
          { id: 'eucaristia_processo', label: 'Como funciona o processo de preparação?', tipo: 'textarea' },
          { id: 'eucaristia_idade', label: 'Qual a idade mínima?', tipo: 'text' },
          { id: 'eucaristia_inscricao', label: 'Período de inscrição?', tipo: 'text' },
          { id: 'eucaristia_documentos', label: 'Documentos necessários?', tipo: 'textarea' },
        ]
      },
      {
        titulo: 'Confissão e Unção',
        campos: [
          { id: 'confissao_horarios', label: 'Quais os horários disponíveis para confissão?', tipo: 'text' },
          { id: 'confissao_agendamento', label: 'É necessário agendamento ou ordem de chegada?', tipo: 'text' },
          { id: 'uncao_como', label: 'Como solicitar a unção dos enfermos?', tipo: 'textarea' },
          { id: 'uncao_hospital', label: 'Atende em hospitais/residências?', tipo: 'text' },
        ]
      },
    ]
  },

  pastorais: {
    titulo: 'Pastorais e Grupos',
    subtitulo: 'Preencha para cada pastoral ou grupo. Se coordena mais de um, envie uma resposta para cada.',
    secoes: [
      {
        titulo: 'Informações do Grupo',
        campos: [
          { id: 'pastoral_nome', label: 'Nome da Pastoral/Grupo/Movimento', tipo: 'text' },
          { id: 'pastoral_coordenador', label: 'Nome do(a) coordenador(a)', tipo: 'text' },
          { id: 'pastoral_contato', label: 'Telefone/WhatsApp de contato', tipo: 'text' },
          { id: 'pastoral_dia', label: 'Dia e horário das reuniões', tipo: 'text' },
          { id: 'pastoral_local', label: 'Local das reuniões', tipo: 'text' },
          { id: 'pastoral_descricao', label: 'Breve descrição da atividade (o que fazem)', tipo: 'textarea' },
          { id: 'pastoral_participar', label: 'Como uma pessoa pode participar?', tipo: 'textarea' },
          { id: 'pastoral_requisitos', label: 'Existe algum requisito para participar?', tipo: 'text' },
          { id: 'pastoral_membros', label: 'Quantos membros ativos aproximadamente?', tipo: 'text' },
        ]
      },
    ]
  },

  catequese: {
    titulo: 'Catequese',
    subtitulo: 'Informações sobre a catequese paroquial.',
    secoes: [
      {
        titulo: 'Informações da Catequese',
        campos: [
          { id: 'cat_turmas', label: 'Quantas turmas existem atualmente?', tipo: 'text' },
          { id: 'cat_lista', label: 'Liste o nome de cada turma e o catequista responsável', tipo: 'textarea', hint: 'Ex: 1ª Eucaristia Manhã — Maria da Silva, Perseverança — João Santos' },
          { id: 'cat_faixa', label: 'Qual a faixa etária para cada etapa?', tipo: 'textarea' },
          { id: 'cat_horarios', label: 'Quais os dias e horários dos encontros?', tipo: 'textarea' },
          { id: 'cat_inscricao', label: 'Período de inscrição (mês de abertura)', tipo: 'text' },
          { id: 'cat_documentos', label: 'Documentos necessários para inscrição', tipo: 'textarea' },
          { id: 'cat_duracao', label: 'Duração da catequese (quantos anos/meses)', tipo: 'text' },
          { id: 'cat_local', label: 'Local dos encontros', tipo: 'text' },
          { id: 'cat_adultos', label: 'Existe catequese para adultos? Detalhes:', tipo: 'textarea' },
        ]
      },
    ]
  },

  geral: {
    titulo: 'Informações Gerais',
    subtitulo: 'Dados de contato, endereço e funcionamento.',
    secoes: [
      {
        titulo: 'Contato e Localização',
        campos: [
          { id: 'endereco', label: 'Endereço completo', tipo: 'text' },
          { id: 'cep', label: 'CEP', tipo: 'text' },
          { id: 'telefone', label: 'Telefone fixo', tipo: 'text' },
          { id: 'whatsapp', label: 'WhatsApp', tipo: 'text' },
          { id: 'email', label: 'E-mail', tipo: 'text' },
          { id: 'secretaria_horario', label: 'Horário de funcionamento da secretaria', tipo: 'text' },
        ]
      },
      {
        titulo: 'Redes Sociais e Doação',
        campos: [
          { id: 'facebook', label: 'Facebook (link)', tipo: 'text' },
          { id: 'instagram', label: 'Instagram (link)', tipo: 'text' },
          { id: 'youtube', label: 'YouTube (link)', tipo: 'text' },
          { id: 'pix', label: 'Chave PIX para doações', tipo: 'text' },
          { id: 'dados_bancarios', label: 'Dados bancários para depósito', tipo: 'textarea' },
        ]
      },
      {
        titulo: 'Estrutura',
        campos: [
          { id: 'estacionamento', label: 'Possui estacionamento?', tipo: 'text' },
          { id: 'acessibilidade', label: 'Possui acessibilidade (rampa, banheiro adaptado)?', tipo: 'textarea' },
        ]
      },
    ]
  },

  celebracoes: {
    titulo: 'Celebrações e Horários',
    subtitulo: 'Informações sobre missas, adoração e festas.',
    secoes: [
      {
        titulo: 'Horários de Missa',
        campos: [
          { id: 'missa_semana', label: 'Horários de missa (Segunda a Sexta)', tipo: 'textarea' },
          { id: 'missa_sabado', label: 'Horários de missa (Sábado)', tipo: 'text' },
          { id: 'missa_domingo', label: 'Horários de missa (Domingo)', tipo: 'textarea' },
        ]
      },
      {
        titulo: 'Outras Celebrações',
        campos: [
          { id: 'adoracao', label: 'Existe adoração ao Santíssimo? Quando?', tipo: 'text' },
          { id: 'terco', label: 'Existe terço comunitário? Quando?', tipo: 'text' },
          { id: 'hora_santa', label: 'Existe hora santa? Quando?', tipo: 'text' },
          { id: 'outras_celebracoes', label: 'Existem celebrações fixas durante a semana além da missa?', tipo: 'textarea' },
          { id: 'festas_anuais', label: 'Quais as principais festas/celebrações anuais?', tipo: 'textarea', hint: 'Ex: Festa da Padroeira, Corpus Christi, Semana Santa...' },
          { id: 'transmissao', label: 'A paróquia faz transmissão ao vivo? Em qual canal?', tipo: 'text' },
        ]
      },
    ]
  },
};

// Renderizar formulário
function abrirFormulario(tipo) {
  const form = FORMULARIOS[tipo];
  if (!form) return;

  document.getElementById('formsGrid').classList.add('hidden');
  document.querySelector('.intro').classList.add('hidden');
  document.getElementById('successMsg').classList.add('hidden');
  document.getElementById('formContainer').classList.remove('hidden');

  let html = `<h2 class="form-title">${form.titulo}</h2>`;
  html += `<p class="form-subtitle">${form.subtitulo}</p>`;
  html += `<form id="activeForm" onsubmit="enviarFormulario(event, '${tipo}')">`;

  // Nome de quem responde
  html += `<div class="form-section">`;
  html += `<h4>Identificação</h4>`;
  html += `<div class="field"><label>Seu nome <span class="hint">Para sabermos quem preencheu</span></label><input type="text" name="respondente" required></div>`;
  html += `</div>`;

  form.secoes.forEach(secao => {
    html += `<div class="form-section"><h4>${secao.titulo}</h4>`;
    secao.campos.forEach(campo => {
      html += `<div class="field"><label>${campo.label}`;
      if (campo.hint) html += `<span class="hint">${campo.hint}</span>`;
      html += `</label>`;
      if (campo.tipo === 'textarea') {
        html += `<textarea name="${campo.id}" rows="4"></textarea>`;
      } else {
        html += `<input type="text" name="${campo.id}">`;
      }
      html += `</div>`;
    });
    html += `</div>`;
  });

  html += `<button type="submit" class="btn-primary" id="btnSubmit">Enviar Respostas</button>`;
  html += `</form>`;

  document.getElementById('formContent').innerHTML = html;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Enviar para Supabase
async function enviarFormulario(e, tipo) {
  e.preventDefault();
  const btn = document.getElementById('btnSubmit');
  btn.disabled = true;
  btn.textContent = 'Enviando...';

  const formData = new FormData(e.target);
  const dados = {};
  formData.forEach((value, key) => { dados[key] = value; });

  // Salvar no Supabase
  const { error } = await supabase.from('formulario_respostas').insert({
    tipo: tipo,
    respondente: dados.respondente || 'Anônimo',
    respostas: dados,
  });

  if (error) {
    alert('Erro ao enviar. Tente novamente.\n' + error.message);
    btn.disabled = false;
    btn.textContent = 'Enviar Respostas';
    return;
  }

  // Sucesso
  document.getElementById('formContainer').classList.add('hidden');
  document.getElementById('successMsg').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Voltar ao menu
function voltarMenu() {
  document.getElementById('formsGrid').classList.remove('hidden');
  document.querySelector('.intro').classList.remove('hidden');
  document.getElementById('formContainer').classList.add('hidden');
  document.getElementById('successMsg').classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
