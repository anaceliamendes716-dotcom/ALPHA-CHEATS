// ╔══════════════════════════════════════════════════════════╗
// ║          🔥 FREE FIRE STORE — Bot Completo              ║
// ╚══════════════════════════════════════════════════════════╝

const {
  Client, GatewayIntentBits, EmbedBuilder,
  ButtonBuilder, ButtonStyle, ActionRowBuilder,
  ChannelType, PermissionFlagsBits,
} = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ]
});

// ══════════════════════════════════════════════════
//  CONFIGS
// ══════════════════════════════════════════════════
const TOKEN              = process.env.TOKEN;
const PIX                = 'theustheusx86@gmail.com';
const CANAL_TICKET_LOG   = '1499993414588956772'; // canal que recebe transcript dos tickets
const CANAL_CARRINHO_LOG = '1499993399338467412'; // canal que recebe notificação de compra

// ══════════════════════════════════════════════════
//  CATÁLOGO
// ══════════════════════════════════════════════════
const CATALOGO = {

  'holograma': {
    nome: 'HOLOGRAMA — Android', imagem: '',
    bio:
`🛡️ **Seguro, Rápido e 100% Operante**
Eleve sua experiência com o melhor Suporte Android, totalmente revisado e ajustado para máximo desempenho!

*FUNÇÕES DISPONÍVEIS:*
⚙️ Otimização de sensibilidade total
💎 Mira Automática Inteligente (precisa e suave)
🎯 Ajuste de Aimlock Exclusivo
🔧 Controle de precisão direto no Painel
🔩 Proteção contra travamentos e bloqueios
🖥️ Painel Moderno (interface simples e intuitiva)
🛠️ Configurações avançadas para qualquer estilo de jogo
🔄 Atualizações frequentes para manter tudo no máximo nível!

🚀 **Compatível com:**
Android 8 até Android 15 – Funciona em aparelhos básicos ou potentes!

📚 Atendimento rápido e instalação guiada passo a passo (até para iniciantes).
🏆 Recomendado para partidas ranqueadas, campeonatos ou modos valendo apostas.
✅ 100% livre de root!`,
  },

  'holograma ios': {
    nome: 'HOLOGRAMA — iOS', imagem: '',
    bio:
`🛡️ **Versão exclusiva para iOS — Seguro e Indetectável**
A mesma potência do Holograma Android, agora totalmente adaptado pro iOS — revisado e ajustado pra rodar liso no seu iPhone!

*FUNÇÕES DISPONÍVEIS:*
⚙️ Sensibilidade ajustada pro toque do iOS
💎 Mira Suave e Precisa — sem delay nenhum
🎯 Aimlock calibrado pra dispositivos Apple
🔧 Controle de precisão no painel dedicado
🔩 Sistema anti-detecção exclusivo pra iOS
🖥️ Interface leve que não aquece nem consome bateria
🛠️ Compatível com todas as configs do jogo
🔄 Updates constantes após cada patch da Garena

🚀 **Compatível com:**
iPhone 8 até iPhone 15 Pro Max — iOS 14 ao iOS 17!

📚 Instalação simples, suporte no chat até tudo funcionar.
🏆 Ideal pra quem quer xitar no ranked sem medo de ban.
✅ Anti-ban garantido e livre de root!`,
  },

  'hs pescoço': {
    nome: 'HS PESCOÇO', imagem: '',
    bio:
`💀 **Headshot direto no pescoço — sem erro, sem piedade.**
O HS Pescoço é o xis mais certeiro do mercado. Cada tiro vai exatamente onde tem que ir, sem vacilo, sem tremer.

*FUNÇÕES DISPONÍVEIS:*
🎯 Mira travada no pescoço automaticamente
⚡ Tempo de reação instantâneo
🔫 Funciona com qualquer arma do jogo
🔒 Indetectável pelo sistema da Garena
📡 Precisão cirúrgica mesmo em movimento
🔄 Atualizado a cada patch pra nunca cair

🚀 **Compatível com:** Android 8 ao Android 15
📚 Suporte na instalação, passo a passo no chat.
🏆 Recomendado pra quem quer subir no ranked matando geral na cabeça.
✅ Anti-ban ativo — xita à vontade!`,
  },

  'hs peito': {
    nome: 'HS PEITO', imagem: '',
    bio:
`💥 **Headshot no peito — tiro certeiro que derruba na hora.**
Parece peito mas é headshot! O HS Peito usa a hitbox pro seu favor, derrubando o inimigo com menos bala e mais eficiência.

*FUNÇÕES DISPONÍVEIS:*
🎯 Mira ajustada na hitbox do peito/cabeça
⚡ Reação ultra rápida no gatilho
🔫 Compatível com todas as armas do Free Fire
🔒 Totalmente fora do radar da Garena
💣 Mais dano por tiro — mata mais rápido
🔄 Sempre atualizado após cada update do jogo

🚀 **Compatível com:** Android 8 até Android 15
📚 Instalação guiada com suporte no chat até tudo rodar liso.
🏆 Perfeito pra ranked e campeonatos — domina o lobby inteiro.
✅ 100% anti-ban — xita tranquilo!`,
  },

  'headtrick': {
    nome: 'HEADTRICK', imagem: '',
    bio:
`🪄 **Headtrick — o truque que faz o inimigo não entender nada.**
Parece mágica mas é tecnologia. O Headtrick força o headshot de um jeito que nem o próprio ADM consegue explicar. Barato, cabuloso e dá muito capa.

*FUNÇÕES DISPONÍVEIS:*
🎯 Headshot automático em qualquer distância
🪄 Trick de mira que confunde o sistema anti-cheat
⚡ Velocidade de tiro maximizada
🔫 Compatível com sniper, AR, SMG — tudo!
🔒 Indetectável — passa fácil pelo anti-cheat
💎 Deixa seu gameplay com cara de jogador profissional
🔄 Atualizado constantemente

🚀 **Compatível com:** Android 8 até Android 15
📚 Suporte rápido e instalação guiada no chat.
🏆 Dá muito capa além de ser barato — custo-benefício imbatível no mercado.
✅ Anti-ban garantido — xita à vontade sem medo!`,
  },

  'ffh4x': {
    nome: 'FFH4X — Android', imagem: '',
    bio:
`🔥 **FFH4X — O xis mais famoso do Free Fire, na sua mão agora.**
Potente, rápido e cheio de funções. O FFH4X é referência no mundo do xit e aqui você garante com suporte completo e preço justo.

*FUNÇÕES DISPONÍVEIS:*
⚙️ Painel completo com dezenas de funções
💎 Mira automática com precisão máxima
🎯 Aimbot configurável no estilo que você quiser
🔧 Anti-ban integrado no próprio painel
🖥️ Interface intuitiva — fácil de usar
🔫 Funciona com todas as armas e modos
🔄 Atualizações automáticas pós-patch da Garena
🚫 Proteção contra bloqueio e travamento

🚀 **Compatível com:** Android 8 até Android 15
📚 Instalação passo a passo com suporte no chat.
🏆 Recomendado pra ranked, campeonato e modos apostados.
✅ Anti-ban ativo — 100% seguro!`,
  },

  'ffh4x ios': {
    nome: 'FFH4X — iOS', imagem: '',
    bio:
`🔥 **FFH4X iOS — A mesma potência, agora no seu iPhone!**
O FFH4X que todo mundo conhece chegou pro iOS. Mesmas funções pesadas, adaptadas pra rodar perfeito no sistema da Apple.

*FUNÇÕES DISPONÍVEIS:*
⚙️ Painel completo otimizado pro iOS
💎 Mira automática calibrada pra tela touch do iPhone
🎯 Aimbot preciso em qualquer modo
🔧 Anti-detecção exclusivo pra iOS
🖥️ Interface leve que não aquece o aparelho
🔫 Compatível com todas as armas e modos do jogo
🔄 Updates constantes — sempre funcionando após patch
🚫 Proteção total contra ban e bloqueio

🚀 **Compatível com:** iPhone 8 até iPhone 15 Pro Max — iOS 14 ao iOS 17!
📚 Suporte completo na instalação, até pra quem nunca usou.
🏆 Ideal pra quem quer o FFH4X mas joga no iPhone.
✅ Anti-ban garantido — xita tranquilo no iOS!`,
  },

  'drip client': {
    nome: 'DRIP CLIENT', imagem: '',
    bio:
`💧 **Drip Client — estilo e performance num só lugar.**
Não é qualquer xis. O Drip Client foi desenvolvido pra quem quer dominar com classe, xitando sem perder o estilo dentro do lobby.

*FUNÇÕES DISPONÍVEIS:*
⚙️ Painel estiloso e moderno
💎 Mira fluida com sensibilidade ajustável
🎯 Aimlock preciso e indetectável
🔧 Anti-ban de última geração
🌊 Sistema anti-lag pra jogar sem travamento
🖥️ Leve — não consome bateria nem esquenta o celular
🔄 Atualizações frequentes com novas funções
💥 Compatível com todos os modos e armas

🚀 **Compatível com:** Android 8 até Android 15
📚 Suporte no chat até estar 100% funcionando.
🏆 Recomendado pra quem quer performance e ainda manter o estilo.
✅ 100% anti-ban — xita à vontade, sem medo!`,
  },

  'bypass': {
    nome: 'BYPASS', imagem: '',
    bio:
`🚨 **BYPASS FULL — XITAR À VONTADE E ZOAR DA CARA DO ADM**
Isso mesmo. Com o Bypass você passa por cima de tudo, faz o que quer no lobby e o ADM não consegue te pegar. Barato e devastador.

*FUNÇÕES DISPONÍVEIS:*
🚫 Bypass total do sistema anti-cheat da Garena
🎯 Aimbot liberado sem trava
💣 Todas as funções desbloqueadas no painel
⚡ Velocidade de resposta máxima
🔒 Indetectável — o ADM pode olhar que não acha nada
🔄 Atualizado toda vez que a Garena tenta bloquear
🖥️ Painel direto e simples de usar

🚀 **Compatível com:** Android 8 até Android 15
📚 Instalação rápida com suporte no chat.
🏆 Ideal pra quem quer xitar sem limitação nenhuma.
✅ Anti-ban integrado — passa fácil!`,
  },

  'proxy': {
    nome: 'PROXY', imagem: '',
    bio:
`🌐 **PROXY — O melhor do mercado e ainda vem com brinde!**
Não é qualquer proxy. Esse aqui é o melhor proxy do momento — esconde sua conexão, evita bloqueio e ainda vem com auxílio incluso de brinde. Isso você não acha em outro lugar.

*FUNÇÕES DISPONÍVEIS:*
🌐 Proxy de alto desempenho — conexão camuflada
🔒 Esconde seu IP e protege sua conta
⚡ Baixa latência — sem lag, sem delay
🎯 Compatível com qualquer xis do mercado
🛡️ Proteção contra ban por IP
🔄 Atualização automática do proxy
🎁 **Auxílio de brinde incluso na compra**

🚀 **Compatível com:** Android 8 até Android 15
📚 Suporte completo na configuração — do zero até funcionar.
🏆 O melhor proxy do momento — testado e aprovado pela comunidade.
✅ Anti-ban garantido — navega e xita protegido!`,
  },

  'passe': {
    nome: 'PASSE BOOYAH', imagem: '',
    bio:
`🎫 **Venha garantir seu Passe Booyah e ficar no estilo sendo pobre!**
Isso mesmo — você não precisa gastar uma fortuna pra ter o Passe Booyah. Aqui você garante barato e ainda fica estiloso no lobby como se fosse rico.

*O QUE VOCÊ RECEBE:*
🎫 Passe Booyah completo na sua conta
👑 Skins e recompensas exclusivas do passe
💎 Itens que só quem tem passe consegue
🎯 Missões e XP do passe liberados
🔥 Aparência de jogador investido no jogo
🎁 Suporte na entrega até o passe aparecer na sua conta

🚀 **Compatível com:** Android e iOS
📚 Entrega rápida com suporte no chat.
🏆 Fica no estilo no ranked sem precisar gastar muito.
✅ Entrega segura — damos suporte até a conclusão!`,
  },

  'passador': {
    nome: 'PASSADOR DE REPLAY', imagem: '',
    bio:
`📹 **Quer passar o replay pro ADM não achar o xit? Você achou aqui.**
Acabou o estresse de tomar ban por replay. Com o Passador você edita o replay de um jeito que o ADM olha e não vê nada de errado. Simples assim.

*O QUE O PASSADOR FAZ:*
📹 Modifica o replay pra esconder o xit
🔒 ADM analisa e não encontra nada
⚡ Processo rápido — entregamos o replay editado
🎯 Compatível com os replays do Free Fire atual
🛡️ Protege sua conta de ban por denúncia
🔄 Atualizado conforme o formato de replay muda

🚀 **Funciona para:** Qualquer conta — Android ou iOS!
📚 Manda o replay no chat, a gente edita e devolve.
🏆 A solução mais inteligente pra quem xita e quer ficar seguro.
✅ Discrição total — seu xit fica entre você e a gente!`,
  },

  'conta': {
    nome: 'CONTA LV 15', imagem: '',
    bio:
`🎮 **Venha garantir sua conta LV 15 pra xitar full — damos suporte!**
Conta pronta, calibrada e preparada pra você entrar xitando do zero. Nível 15 já desbloqueado, sem precisar fazer tutorial, sem perder tempo.

*O QUE VEM NA CONTA:*
🎮 Conta Free Fire nível 15
🔓 Modos principais desbloqueados
🎯 Pronta pra usar xis imediatamente
👤 Login seguro com dados exclusivos seus
🛡️ Conta limpa — sem histórico de ban
📦 Entrega imediata após confirmação do pagamento
💬 Suporte completo pós-entrega

🚀 **Compatível com:** Android e iOS
📚 Suporte no chat até você estar logado e jogando.
🏆 A conta ideal pra quem quer começar xitando sem perder conta principal.
✅ Entrega segura — damos suporte até a conclusão!`,
  },

};

// ══════════════════════════════════════════════════
//  MEMÓRIA
// ══════════════════════════════════════════════════
const carrinhos  = new Map(); // canal.id → { userId, nome, preco, imagem }
const tickets    = new Map(); // canal.id → { userId, tipo, mensagens: [] }

// ══════════════════════════════════════════════════
//  HELPERS
// ══════════════════════════════════════════════════
const isAdmin = (m) => m.permissions.has(PermissionFlagsBits.Administrator);
const nums4   = ()  => Math.floor(1000 + Math.random() * 9000);
const nums3   = ()  => Math.floor(100  + Math.random() * 900);
const norm    = (s) => s.toLowerCase().trim();

function parseLoja(texto) {
  const t = norm(texto);
  const chaves = Object.keys(CATALOGO).sort((a, b) => b.length - a.length);
  for (const chave of chaves) {
    if (t.startsWith(chave)) {
      const resto = t.slice(chave.length).trim();
      return { chave, preco: resto };
    }
  }
  return null;
}

function formatarPreco(preco) {
  if (!preco) return null;
  if (preco.toLowerCase().startsWith('r$')) return preco.toUpperCase();
  return `R$ ${preco}`;
}

// ══════════════════════════════════════════════════
//  BUILD EMBED ANÚNCIO
// ══════════════════════════════════════════════════
function buildAnuncio(p, preco) {
  const embed = new EmbedBuilder()
    .setAuthor({ name: 'FREE FIRE STORE | Produto' })
    .setDescription(
      p.bio + '\n\n' +
      `🪐 **| Nome: ${p.nome}**\n` +
      `💸 **| Preço: ${preco}**\n` +
      `📦 **| Estoque: ∞**`
    )
    .setColor(0xFF4500);
  if (p.imagem) embed.setImage(p.imagem);
  return embed;
}

function buildBtnComprar() {
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId('comprar').setLabel('Comprar').setStyle(ButtonStyle.Success)
  );
}

// ══════════════════════════════════════════════════
//  GERAR TRANSCRIPT (txt simples)
// ══════════════════════════════════════════════════
async function gerarTranscript(canal, ticketData) {
  const msgs = ticketData.mensagens || [];
  const linhas = [
    `════════════════════════════════════`,
    `📋 TRANSCRIPT — ${canal.name}`,
    `📅 Data: ${new Date().toLocaleString('pt-BR')}`,
    `🎫 Tipo: ${ticketData.tipo}`,
    `════════════════════════════════════`,
    '',
    ...msgs.map(m => `[${m.hora}] ${m.autor}: ${m.conteudo}`),
    '',
    `════════════════════════════════════`,
    `Total de mensagens: ${msgs.length}`,
  ];
  return Buffer.from(linhas.join('\n'), 'utf-8');
}

// ══════════════════════════════════════════════════
//  READY
// ══════════════════════════════════════════════════
client.once('ready', () => {
  console.log(`✅ Bot online: ${client.user.tag}`);
  client.user.setActivity('🔥 Free Fire Store');
});

// ══════════════════════════════════════════════════
//  GRAVAR MENSAGENS DOS TICKETS
// ══════════════════════════════════════════════════
client.on('messageCreate', async (msg) => {
  if (msg.author.bot) return;

  // Grava mensagens do ticket pro transcript
  if (tickets.has(msg.channel.id)) {
    const tk = tickets.get(msg.channel.id);
    tk.mensagens.push({
      hora: new Date().toLocaleTimeString('pt-BR'),
      autor: `${msg.author.username}`,
      conteudo: msg.attachments.size > 0
        ? `${msg.content || ''} [Arquivo: ${msg.attachments.first().url}]`.trim()
        : msg.content,
    });
    return; // Não processa como comando
  }

  if (!msg.content.startsWith('!')) return;
  if (!isAdmin(msg.member)) return;

  const raw   = msg.content.trim();
  const esp   = raw.indexOf(' ');
  const cmd   = (esp === -1 ? raw : raw.slice(0, esp)).toLowerCase();
  const resto = esp === -1 ? '' : raw.slice(esp + 1).trim();

  // ── !loja <produto> <preço> ──────────────────────────────
  if (cmd === '!loja') {
    if (!resto) return msg.reply('❌ Use: `!loja holograma 5,00`');
    const parsed = parseLoja(resto);
    if (!parsed) return msg.reply('❌ Produto não encontrado. Use `!produtos`.');
    const preco = formatarPreco(parsed.preco);
    if (!preco) return msg.reply(`❌ Coloca o preço! Ex: \`!loja ${parsed.chave} 5,00\``);
    const p = CATALOGO[parsed.chave];
    msg.delete().catch(() => {});
    carrinhos.set('anuncio_' + msg.channel.id, { chave: parsed.chave, preco });
    await msg.channel.send({ embeds: [buildAnuncio(p, preco)], components: [buildBtnComprar()] });
    return;
  }

  // ── !atendimento ─────────────────────────────────────────
  if (cmd === '!atendimento') {
    msg.delete().catch(() => {});
    const embed = new EmbedBuilder()
      .setTitle('🎫 Central de Atendimento')
      .setDescription(
        'Selecione uma opção abaixo para abrir seu ticket.\n' +
        'Um canal privado será criado só pra você!'
      )
      .setColor(0xFF4500)
      .setFooter({ text: 'FREE FIRE STORE • Atendimento' });

    const row1 = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('ticket_produto').setLabel('📦 RECEBER PRODUTO').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId('ticket_suporte').setLabel('🛠️ SUPORTE').setStyle(ButtonStyle.Primary),
      new ButtonBuilder().setCustomId('ticket_problema').setLabel('⚠️ PROBLEMA').setStyle(ButtonStyle.Danger),
    );
    const row2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('ticket_vagas').setLabel('👥 VAGAS DIV/SUP').setStyle(ButtonStyle.Secondary),
      new ButtonBuilder().setCustomId('ticket_criar').setLabel('🔧 CRIAR SEU XIT').setStyle(ButtonStyle.Secondary),
    );

    await msg.channel.send({ embeds: [embed], components: [row1, row2] });
    return;
  }

  // ── !setimagem <produto> ─────────────────────────────────
  if (cmd === '!setimagem') {
    if (!resto) return msg.reply('❌ Use: `!setimagem holograma` com a foto anexada.');
    const parsed = parseLoja(resto);
    if (!parsed) return msg.reply('❌ Produto não encontrado.');
    if (msg.attachments.size === 0) return msg.reply('❌ Envie a foto junto com o comando!');
    CATALOGO[parsed.chave].imagem = msg.attachments.first().url;
    return msg.reply(`✅ Imagem do **${CATALOGO[parsed.chave].nome}** atualizada!`);
  }

  // ── !produtos ────────────────────────────────────────────
  if (cmd === '!produtos') {
    const lista = Object.entries(CATALOGO)
      .map(([k, p]) => `• \`!loja ${k} <preço>\` — **${p.nome}**`).join('\n');
    return msg.reply({ embeds: [new EmbedBuilder().setTitle('📦 Produtos').setDescription(lista).setColor(0xFF4500)] });
  }

  // ── !ajuda ───────────────────────────────────────────────
  if (cmd === '!ajuda') {
    return msg.reply({ embeds: [new EmbedBuilder()
      .setTitle('📋 Comandos')
      .setDescription(
        '`!loja <produto> <preço>` — Posta anúncio\n' +
        '`!atendimento` — Painel de tickets\n' +
        '`!setimagem <produto>` — Muda imagem (com foto)\n' +
        '`!produtos` — Lista produtos\n\n' +
        '**Produtos:** ' + Object.keys(CATALOGO).map(k => `\`${k}\``).join(', ')
      ).setColor(0xFF4500)] });
  }
});

// ══════════════════════════════════════════════════
//  INTERAÇÕES — BOTÕES
// ══════════════════════════════════════════════════
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;
  const { customId, user, guild, member } = interaction;

  // ════════════════════════════════════════════════
  //  TICKETS
  // ════════════════════════════════════════════════
  const tiposTicket = {
    'ticket_produto': '📦 RECEBER PRODUTO',
    'ticket_suporte': '🛠️ SUPORTE',
    'ticket_problema': '⚠️ PROBLEMA',
    'ticket_vagas':   '👥 VAGAS DIV/SUP',
    'ticket_criar':   '🔧 CRIAR SEU XIT',
  };

  if (tiposTicket[customId]) {
    const tipo = tiposTicket[customId];

    // Categoria TICKETS
    let cat = guild.channels.cache.find(
      c => c.type === ChannelType.GuildCategory && c.name.toUpperCase() === 'TICKETS'
    );
    if (!cat) cat = await guild.channels.create({ name: 'TICKETS', type: ChannelType.GuildCategory });

    // Canal privado ticket-XXXX
    const canal = await guild.channels.create({
      name: `ticket-${nums4()}`,
      type: ChannelType.GuildText,
      parent: cat.id,
      permissionOverwrites: [
        { id: guild.roles.everyone, deny: [PermissionFlagsBits.ViewChannel] },
        {
          id: user.id,
          allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.ReadMessageHistory],
        },
        // Admins veem automaticamente pois têm Administrator
      ],
    });

    // Inicia o transcript
    tickets.set(canal.id, { userId: user.id, tipo, mensagens: [] });

    const embedTicket = new EmbedBuilder()
      .setTitle(`${tipo}`)
      .setDescription(
        `Olá ${user}! Seu ticket foi aberto com sucesso.\n\n` +
        `Descreva sua situação aqui e nossa equipe vai te atender o quanto antes.\n\n` +
        `> 📌 Use os botões abaixo para gerenciar este ticket.`
      )
      .setColor(0xFF4500)
      .setTimestamp()
      .setFooter({ text: 'FREE FIRE STORE • Ticket' });

    const rowTicket = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId(`tk_fechar_${canal.id}`).setLabel('🔒 FECHAR TICKET').setStyle(ButtonStyle.Danger),
      new ButtonBuilder().setCustomId(`tk_notificar_${canal.id}`).setLabel('🔔 NOTIFICAR MEMBRO').setStyle(ButtonStyle.Primary),
      new ButtonBuilder().setCustomId(`tk_add_${canal.id}`).setLabel('➕ ADICIONAR MEMBRO').setStyle(ButtonStyle.Secondary),
    );

    await canal.send({ content: `${user}`, embeds: [embedTicket], components: [rowTicket] });
    return interaction.reply({ content: `✅ Ticket criado! → ${canal}`, ephemeral: true });
  }

  // ── FECHAR TICKET ─────────────────────────────────────────
  if (customId.startsWith('tk_fechar_')) {
    if (!isAdmin(member)) return interaction.reply({ content: '❌ Apenas admins.', ephemeral: true });
    const canalId = customId.replace('tk_fechar_', '');
    const tk      = tickets.get(canalId);
    const ch      = guild.channels.cache.get(canalId);

    await interaction.reply({ content: '🔒 Fechando ticket e gerando transcript...' });

    // Gera o arquivo .txt
    const buf = await gerarTranscript(ch, tk || { tipo: 'Ticket', mensagens: [] });

    // Envia transcript no canal de log
    const logCanal = guild.channels.cache.get(CANAL_TICKET_LOG);
    if (logCanal) {
      const embedLog = new EmbedBuilder()
        .setTitle('📋 Transcript de Ticket')
        .setDescription(
          `**Canal:** ${ch?.name || canalId}\n` +
          `**Tipo:** ${tk?.tipo || '—'}\n` +
          `**Usuário:** <@${tk?.userId || '?'}>\n` +
          `**Mensagens:** ${tk?.mensagens?.length || 0}\n` +
          `**Fechado por:** ${user.tag}\n` +
          `**Data:** ${new Date().toLocaleString('pt-BR')}`
        )
        .setColor(0xFF4500)
        .setTimestamp();

      await logCanal.send({
        embeds: [embedLog],
        files: [{ attachment: buf, name: `transcript-${ch?.name || canalId}.txt` }],
      });
    }

    // Envia transcript pro membro via DM
    if (tk?.userId) {
      const membro = await guild.members.fetch(tk.userId).catch(() => null);
      if (membro) {
        await membro.send({
          embeds: [new EmbedBuilder()
            .setTitle('📋 Seu Ticket foi Fechado')
            .setDescription(`Aqui está o transcript da sua conversa em **${ch?.name || 'ticket'}**.`)
            .setColor(0xFF4500)],
          files: [{ attachment: buf, name: `transcript-${ch?.name || canalId}.txt` }],
        }).catch(() => {}); // Ignora se DM bloqueada
      }
    }

    tickets.delete(canalId);
    setTimeout(async () => {
      if (ch) await ch.delete().catch(() => {});
    }, 5000);
    return;
  }

  // ── NOTIFICAR MEMBRO ──────────────────────────────────────
  if (customId.startsWith('tk_notificar_')) {
    if (!isAdmin(member)) return interaction.reply({ content: '❌ Apenas admins.', ephemeral: true });
    const canalId = customId.replace('tk_notificar_', '');
    const tk      = tickets.get(canalId);
    const ch      = guild.channels.cache.get(canalId);

    if (tk?.userId) {
      const membro = await guild.members.fetch(tk.userId).catch(() => null);
      if (membro) {
        await ch.send({ content: `🔔 ${membro} — A equipe está esperando sua resposta aqui no ticket!` });
        return interaction.reply({ content: '✅ Membro notificado!', ephemeral: true });
      }
    }
    return interaction.reply({ content: '❌ Não foi possível notificar o membro.', ephemeral: true });
  }

  // ── ADICIONAR MEMBRO ──────────────────────────────────────
  if (customId.startsWith('tk_add_')) {
    if (!isAdmin(member)) return interaction.reply({ content: '❌ Apenas admins.', ephemeral: true });
    return interaction.reply({
      content: '➕ **Adicionar membro:**\nDigite no chat o @ do membro que quer adicionar e um admin usará o comando:\n`!addticket @usuario`',
      ephemeral: true,
    });
  }

  // ════════════════════════════════════════════════
  //  COMPRAR
  // ════════════════════════════════════════════════
  if (customId === 'comprar') {
    const anuncio = carrinhos.get('anuncio_' + interaction.channel.id);
    const p       = anuncio ? CATALOGO[anuncio.chave] : null;
    const preco   = anuncio ? anuncio.preco : '—';

    let cat = guild.channels.cache.find(
      c => c.type === ChannelType.GuildCategory && c.name.toUpperCase() === 'CARRINHOS'
    );
    if (!cat) cat = await guild.channels.create({ name: 'CARRINHOS', type: ChannelType.GuildCategory });

    const canal = await guild.channels.create({
      name: `🛒・carrinho-${nums3()}`,
      type: ChannelType.GuildText,
      parent: cat.id,
      permissionOverwrites: [
        { id: guild.roles.everyone, deny: [PermissionFlagsBits.ViewChannel] },
        { id: user.id, allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.ReadMessageHistory] },
      ],
    });

    carrinhos.set(canal.id, { userId: user.id, nome: p?.nome || 'Produto', preco, imagem: p?.imagem || '' });

    // Embed carrinho
    const embedCarrinho = new EmbedBuilder()
      .setTitle('🛒 Carrinho')
      .setDescription(
        `🪐 **Produto:** ${p?.nome || 'Produto'}\n` +
        `💸 **Preço:** ${preco}\n\n` +
        `Clique em **💳 Pagamento** para ver a chave Pix e finalizar.`
      )
      .setColor(0xFF4500)
      .setFooter({ text: 'Canal fechado após confirmação' });

    if (p?.imagem) embedCarrinho.setImage(p.imagem);

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId(`pagar_${canal.id}`).setLabel('💳 Pagamento').setStyle(ButtonStyle.Primary),
      new ButtonBuilder().setCustomId(`fechar_${canal.id}`).setLabel('❌ Cancelar').setStyle(ButtonStyle.Danger),
    );

    await canal.send({ content: `${user}`, embeds: [embedCarrinho], components: [row] });

    // Notificação no canal de log de carrinho
    const logCarrinho = guild.channels.cache.get(CANAL_CARRINHO_LOG);
    if (logCarrinho) {
      const embedLog = new EmbedBuilder()
        .setTitle('🛒 Nova Compra!')
        .setDescription(
          `**Usuário:** ${user} (\`${user.tag}\`)\n` +
          `**Produto:** ${p?.nome || '—'}\n` +
          `**Preço:** ${preco}\n` +
          `**Canal:** ${canal}`
        )
        .setThumbnail(user.displayAvatarURL())
        .setColor(0x00C853)
        .setTimestamp();

      if (p?.imagem) embedLog.setImage(p.imagem);

      await logCarrinho.send({ embeds: [embedLog] });
    }

    return interaction.reply({ content: `✅ Carrinho criado! → ${canal}`, ephemeral: true });
  }

  // ── PAGAMENTO ─────────────────────────────────────────────
  if (customId.startsWith('pagar_')) {
    const canalId = customId.replace('pagar_', '');
    const dados   = carrinhos.get(canalId);
    const preco   = dados?.preco || '—';

    const embedPix = new EmbedBuilder()
      .setTitle('💳  PAGAMENTO VIA PIX')
      .setDescription(
        '```\n' +
        '╔══════════════════════════════════════════╗\n' +
        '║                                          ║\n' +
        '║           🔑   CHAVE PIX                 ║\n' +
        '║                                          ║\n' +
        `║      ${PIX}      ║\n` +
        '║                                          ║\n' +
        '╚══════════════════════════════════════════╝\n' +
        '```\n' +
        `## 💸 Valor: ${preco}`
      )
      .addFields({ name: '📌 Como pagar', value:
        '**1️⃣** Copie a chave Pix acima\n' +
        '**2️⃣** Abra seu banco e transfira o valor\n' +
        '**3️⃣** Mande o **comprovante** aqui no chat\n' +
        '**4️⃣** Aguarde a confirmação do vendedor ✅'
      })
      .setColor(0x00C853)
      .setFooter({ text: '⚡ Confirmação rápida após comprovante' });

    const btnConfirmar = new ButtonBuilder()
      .setCustomId(`confirmar_${canalId}`)
      .setLabel('✅ Confirmar Pagamento (Admin)')
      .setStyle(ButtonStyle.Success);

    return interaction.reply({ embeds: [embedPix], components: [new ActionRowBuilder().addComponents(btnConfirmar)] });
  }

  // ── CONFIRMAR PAGAMENTO (admin) ───────────────────────────
  if (customId.startsWith('confirmar_')) {
    if (!isAdmin(member)) return interaction.reply({ content: '❌ Apenas admins.', ephemeral: true });
    const canalId = customId.replace('confirmar_', '');
    const dados   = carrinhos.get(canalId);

    await interaction.reply({ embeds: [new EmbedBuilder()
      .setTitle('✅ Pagamento Confirmado!')
      .setDescription(`Compra aprovada! **${dados?.nome ?? 'Produto'}** entregue em breve.\n🎮 Bom jogo no Free Fire!`)
      .setColor(0x00C853)] });

    setTimeout(async () => {
      carrinhos.delete(canalId);
      const ch = guild.channels.cache.get(canalId);
      if (ch) await ch.delete().catch(() => {});
    }, 15000);
  }

  // ── CANCELAR CARRINHO ─────────────────────────────────────
  if (customId.startsWith('fechar_') && !customId.startsWith('fechar_tk')) {
    const canalId = customId.replace('fechar_', '');
    const dados   = carrinhos.get(canalId);
    if (dados?.userId !== user.id && !isAdmin(member)) {
      return interaction.reply({ content: '❌ Só você ou um admin pode cancelar.', ephemeral: true });
    }
    await interaction.reply({ content: '🗑️ Cancelando...' });
    setTimeout(async () => {
      carrinhos.delete(canalId);
      const ch = guild.channels.cache.get(canalId);
      if (ch) await ch.delete().catch(() => {});
    }, 3000);
  }
});

client.login(TOKEN);
