let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
     Minta owner
https://wa.me/6285786539008
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '⚠️ *SC MINTA OWNER : 6285786539008 ( FAHRUL)* ⚠️', 'status@broadcast')
}

handler.command = /^(sc|sourcecode)$/i

export default handler
