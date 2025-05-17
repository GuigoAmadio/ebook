// utils.js

// ✅ Função para incrementar valor numérico no sessionStorage
export function incrementarCliquesCheckout(chave, campo, incremento = 1) {
  const dados = JSON.parse(sessionStorage.getItem(chave)) || {};
  const valorAtual = typeof dados[campo] === "number" ? dados[campo] : 0;
  dados[campo] = valorAtual + incremento;
  sessionStorage.setItem(chave, JSON.stringify(dados));
}

export function incrementarRespostasQuiz(chave, campo, incremento = 1) {
  const dados = JSON.parse(sessionStorage.getItem(chave)) || {};
  const valorAtual = typeof dados[campo] === "number" ? dados[campo] : 0;
  dados[campo] = valorAtual + incremento;
  sessionStorage.setItem(chave, JSON.stringify(dados));
}

// ✅ Função para salvar dados no sessionStorage
export function salvarDados(chave, campo, valor) {
  const dados = JSON.parse(sessionStorage.getItem(chave)) || {};
  dados[campo] = valor;
  sessionStorage.setItem(chave, JSON.stringify(dados));
}

// ✅ Função para registrar logs de ações
export function registrarLog(chave, acao, detalhes) {
  const logs = JSON.parse(sessionStorage.getItem(chave)) || [];
  logs.push({ acao, detalhes });
  sessionStorage.setItem(chave, JSON.stringify(logs));
}

// ✅ Função para enviar logs
// ✅ Função para enviar logs de múltiplas chaves
export function enviarLogs(...chaves) {
  const hiperLogs = {};

  chaves.forEach((chave) => {
    const logs = JSON.parse(sessionStorage.getItem(chave));
    if (logs) {
      hiperLogs[chave] = logs;
      sessionStorage.removeItem(chave);
    }
  });

  if (Object.keys(hiperLogs).length > 0) {
    navigator.sendBeacon(
      "https://us-central1-stripepay-3c918.cloudfunctions.net/logs",
      new Blob([JSON.stringify({ hiperLogs })], { type: "application/json" })
    );
    console.log("🟢 Logs enviados com sucesso:", hiperLogs);
  } else {
    console.warn("⚠️ Nenhum log encontrado para as chaves fornecidas.");
  }
}

// ✅ Função para obter e salvar parâmetros da URL
export function obterSalvarParametrosUrl(chave) {
  const params = new URLSearchParams(window.location.search);
  const parametros = {};

  params.forEach((valor, chave) => {
    if (chave.startsWith("utm_") || chave === "ref" || chave === "source") {
      parametros[chave] = valor;
    }
  });

  if (Object.keys(parametros).length > 0) {
    salvarDados(chave, "parametrosEntrada", parametros);
    console.log("🟢 Parâmetros capturados e salvos:", parametros);
  } else {
    console.log("⚠️ Nenhum parâmetro relevante encontrado na URL.");
  }
}

// ✅ Função para criar payload para enviar eventos
export function criarPayload(eventName, valor, produtos, eventId, form = {}) {
  const email = form.email || "";
  const telefone = form.celular || "";

  return {
    email,
    telefone,
    valor,
    produtos,
    eventName,
    eventId,
    fbp: getCookie("_fbp"),
    fbc: getCookie("_fbc"),
    eventSourceUrl: window.location.href,
    eventTime: Math.floor(Date.now() / 1000),
  };
}

// ✅ Função para enviar evento para o Pixel
export function enviarEventoPixel(eventName, valor, produtos, form) {
  const eventId = `${eventName}_${Date.now()}_${Math.random()
    .toString(36)
    .substring(2, 8)}`;

  fbq("track", eventName, {
    content_ids: produtos,
    value: valor,
    currency: "BRL",
    eventID: eventId,
  });

  const payload = criarPayload(eventName, valor, produtos, eventId, form);

  navigator.sendBeacon(
    "https://us-central1-stripepay-3c918.cloudfunctions.net/api/capi",
    new Blob([JSON.stringify(payload)], { type: "application/json" })
  );

  return eventId;
}

// ✅ Função para obter cookies
export function getCookie(name) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
}

// ✅ Função para enviar as respostas usando sendBeacon
// ✅ Função para enviar as respostas usando sendBeacon
export function enviarRespostasComBeacon(novasRespostas) {
  try {
    const payload = {
      respostas: novasRespostas,
      timestamp: new Date().toISOString(),
    };

    const sent = navigator.sendBeacon(
      "https://us-central1-stripepay-3c918.cloudfunctions.net/salvarRespostasQuiz",
      new Blob([JSON.stringify(payload)], { type: "application/json" })
    );

    if (sent) {
      console.log("🟢 Respostas enviadas com sendBeacon.");
      localStorage.removeItem("respostasQuizTemp");
      return true;
    } else {
      console.warn("❌ Falha no envio das respostas com sendBeacon.");
      return false;
    }
  } catch (error) {
    console.error("❌ Erro ao usar sendBeacon:", error);
    return false;
  }
}
