const lenguaje = () => { return 'es' } //Español, idioma predeterminado de yoshiko

//AVISOS DE MENSAJE  
const smsAvisoMG = () => { return `╰⊱🍂⊱ 𝗘𝗥𝗥𝗢𝗥 ⊱🍂⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱🌺⊱ 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗢 ⊱🌺⊱╮\n\n` }

//jadibots
const smsxNobbot = () => { return `*📌 Este comando solo puede ser usado en el bot principal*`}

const smsxBotqr = () => { return `*Usa este Código para convertirte en Bot*\n\n1. Haga click en los tres puntos en la esquina superior derecha.\n2. Toque Dispositivos vinculados\n3. Selecciona *Vincular con el número de teléfono*\n\n*Nota:* El código solo sirve para este número`}

const smsxIg = () => { return `🔮 Sígueme en el canal \n${xbcanal}`}

const smsxConnet = () => { return `🔮 Conectado con exito a Traga Semen Bot`}

const smsxRecon = () => { return `Conexión perdida con Traga Semen Bot...`}

const smsxID = () => { return `*Conectado con éxito!*\n\nEn unos segundos te mandaremos el *Id* que debes usar para volver a conectarte`}

const smsxconnMsg = () => { return `La siguiente vez que se conecte envía el siguiente mensaje para iniciar sesión sin escanear otro código *QR*`}

//main.js
const smsWelcome = () => { return `╔═.✵.════ ✰ ════════╗\n@subject\n╚═══════ ✰ ═════.✵.═╝\n✧⃝━━━━━━━━━━━━━━━━✦͙͙͙\n┃ 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙾 (𝙰)!!\n┃ @user\n┃ 𝙻𝙴𝙰 𝙻𝙰 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 🍂\n✧⃝━━━━━━━━━━━━━━━━✦͙͙͙`}

const smsBye = () => { return `╔═.✵.════ ✰ ════════╗\n- *𝐘𝐨𝐬𝐡𝐢𝐤𝐨 𝐁𝐨𝐭 - 𝐌𝐃 🌺*\n╚═══════ ✰ ═════.✵.═╝\n✧⃝━━━━━━━━━━━━━━━━✦͙͙͙\n┃ @user\n┃ 𝙽𝙾 𝙵𝚄𝙴 𝙳𝙸𝙶𝙽𝙾(𝙰) 𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝙰𝚀𝚄𝙸 👋🏻\n✧⃝━━━━━━━━━━━━━━━━✦͙͙͙`}

const smsSpromote = () => { return `*⎡ •🔮 Nuevo Admin detectado 🔮• ⎦*\n*━━━━━━━━━━━━━━━━*\n🏷 *• Nombre:* @user\n🕒 *• Hora:* ${bottime}\n🗓️ *• Fecha:* ${botdate}\n*━━━━━━━━━━━━━━━━*`}

const smsSdemote = () => { return `*⎡ •🔮 Waoz Un Admin Meno 🔮• ⎦*\n*━━━━━━━━━━━━━━━━*\n🏷 *• Nombre:* @user\n🕒 *• Hora:* ${bottime}\n🗓️ *• Fecha:* ${botdate}\n*━━━━━━━━━━━━━━━━*`}

const smsSdesc = () => { return `❏ 🍂 *Se ha modificado la descripción del grupo.*\n\nNueva Descripción: @desc`}

const smsSsubject = () => { return `❏ 🍂 *Se ha modificado el nombre del grupo.*\nNuevo Nombre: @subject`}

const smsSicon = () => { return `❏ 🍂 *Se ha cambiado la foto del grupo.*`}

const smsSrevoke = () => { return `❏ 🍂 *Se ha actualizado el link del grupo.*\nLink Nuevo: @revoke`}

//propietario
const smsJoin1 = (usedPrefix, command) => { return lenguajeYL['smsAvisoMG']() + `🍂 *Iɴɢʀᴇsᴇ Uɴ Lɪɴᴋ*\n- *Eᴊᴇᴍᴘʟᴏ:*\n*${usedPrefix + command}* ${gp2}`}

const smsJoin2 = () => { return lenguajeYL['smsAvisoEG']() + `${packname}\n- *Yᴀ Sᴇ Hᴀ Uɴɪᴅᴏ Aʟ Gʀᴜᴘᴏ 🍃*`}

const smsJoin = (user) => { return `${packname}\n_🌺 Sᴇ Hᴀ Uɴɪᴅᴏ Aʟ Gʀᴜᴘᴏ_\n\n- 🍃 *Fᴜᴇ Aɢʀᴇɢᴀᴅᴀ Pᴏʀ: @${user}*`}

export default { lenguaje, smsAvisoMG, smsAvisoEG,  smsxNobbot, smsxBotqr, smsxIg, smsxConnet, smsxRecon, smsxID,smsxconnMsg,smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsJoin1, smsJoin2, smsJoin}