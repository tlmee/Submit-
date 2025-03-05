function _0x17d7(){const _0xc886f3=['GuildMessages','log','245PuhcaS','12040ZZYvXc','Guilds','1257404YuPZcG','\x0a\x20\x20\x20\x20\x20█████╗\x20██╗\x20\x20\x20\x20\x20\x20\x20█████╗\x20███╗\x20\x20\x20██╗██████╗\x20\x20█████╗\x20██████╗\x20██╗\x0a\x20\x20\x20\x20██╔══██╗██║\x20\x20\x20\x20\x20\x20██╔══██╗████╗\x20\x20██║██╔══██╗██╔══██╗██╔══██╗██║\x0a\x20\x20\x20\x20███████║██║█████╗███████║██╔██╗\x20██║██████╔╝███████║██████╔╝██║\x0a\x20\x20\x20\x20██╔══██║██║╚════╝██╔══██║██║╚██╗██║██╔══██╗██╔══██║██╔══██╗██║\x0a\x20\x20\x20\x20██║\x20\x20██║███████╗\x20██║\x20\x20██║██║\x20╚████║██████╔╝██║\x20\x20██║██║\x20\x20██║██║\x0a\x20\x20\x20\x20╚═╝\x20\x20╚═╝╚══════╝\x20╚═╝\x20\x20╚═╝╚═╝\x20\x20╚═══╝╚═════╝\x20╚═╝\x20\x20╚═╝╚═╝\x20\x20╚═╝╚═╝\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Thank\x20you\x20for\x20trusting\x20Ali\x20Al-Anbari\x20\x0a','8889162PTaOkW','130VCCIcS','./config.js','5106033vkIkwQ','20279PwuJUN','Logged\x20in\x20as\x20','45986512WaQMCQ','ready','72oGusNj','tag','2wtJxgx','user','372789VJuxLO'];_0x17d7=function(){return _0xc886f3;};return _0x17d7();}function _0xb834(_0x200c47,_0x432c47){const _0x17d721=_0x17d7();return _0xb834=function(_0xb83478,_0x321097){_0xb83478=_0xb83478-0x157;let _0xef690e=_0x17d721[_0xb83478];return _0xef690e;},_0xb834(_0x200c47,_0x432c47);}const _0x2cb707=_0xb834;(function(_0x21566f,_0x3638e3){const _0x2d5669=_0xb834,_0x42c230=_0x21566f();while(!![]){try{const _0x420272=parseInt(_0x2d5669(0x169))/0x1*(parseInt(_0x2d5669(0x161))/0x2)+parseInt(_0x2d5669(0x15a))/0x3+parseInt(_0x2d5669(0x167))/0x4*(parseInt(_0x2d5669(0x166))/0x5)+parseInt(_0x2d5669(0x157))/0x6+-parseInt(_0x2d5669(0x15b))/0x7*(parseInt(_0x2d5669(0x15f))/0x8)+parseInt(_0x2d5669(0x163))/0x9*(parseInt(_0x2d5669(0x158))/0xa)+-parseInt(_0x2d5669(0x15d))/0xb;if(_0x420272===_0x3638e3)break;else _0x42c230['push'](_0x42c230['shift']());}catch(_0x1f5305){_0x42c230['push'](_0x42c230['shift']());}}}(_0x17d7,0xe0ab0));const {Client,GatewayIntentBits,EmbedBuilder,ActionRowBuilder,ButtonBuilder,ButtonStyle,ModalBuilder,TextInputBuilder,TextInputStyle}=require('discord.js'),config=require(_0x2cb707(0x159)),client=new Client({'intents':[GatewayIntentBits[_0x2cb707(0x168)],GatewayIntentBits[_0x2cb707(0x164)],GatewayIntentBits['GuildMembers']]});client['on'](_0x2cb707(0x15e),async()=>{const _0x52563b=_0x2cb707;console[_0x52563b(0x165)](_0x52563b(0x15c)+client[_0x52563b(0x162)][_0x52563b(0x160)]+_0x52563b(0x16a));
  
  const channel = client.channels.cache.get(config.channels.applicationChannel);
  if (channel) {
    const embed = new EmbedBuilder()
      .setTitle('التقديم على الإدارة')
      .setDescription('اضغط على الزر أدناه للتقديم')
      .setColor('#0099ff')
      .setThumbnail(config.images.thumbnail)
      .setImage(config.images.banner);

    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('apply')
          .setLabel('تقديم')
          .setStyle(ButtonStyle.Primary)
      );

    await channel.send({ embeds: [embed], components: [row] });
  }
});

client.on('interactionCreate', async interaction => {
  if (interaction.isButton()) {
    if (interaction.customId === 'apply') {
      // Check if user has banned role
      if (interaction.member.roles.cache.has(config.roles.banned)) {
        return interaction.reply({ 
          content: 'عذراً، لا يمكنك التقديم حالياً', 
          ephemeral: true 
        });
      }

      const modal = new ModalBuilder()
        .setCustomId('application_modal')
        .setTitle('نموذج التقديم');

      const nameInput = new TextInputBuilder()
        .setCustomId('name')
        .setLabel('ما اسمك؟')
        .setStyle(TextInputStyle.Short)
        .setRequired(true);

      const ageInput = new TextInputBuilder()
        .setCustomId('age')
        .setLabel('كم عمرك؟')
        .setStyle(TextInputStyle.Short)
        .setRequired(true);

      const idInput = new TextInputBuilder()
        .setCustomId('discord_id')
        .setLabel('ما هو الايدي الخاص بك؟')
        .setStyle(TextInputStyle.Short)
        .setRequired(true);

      const experienceInput = new TextInputBuilder()
        .setCustomId('experience')
        .setLabel('ما هي خبراتك؟')
        .setStyle(TextInputStyle.Paragraph)
        .setRequired(true);

      modal.addComponents(
        new ActionRowBuilder().addComponents(nameInput),
        new ActionRowBuilder().addComponents(ageInput),
        new ActionRowBuilder().addComponents(idInput),
        new ActionRowBuilder().addComponents(experienceInput)
      );

      await interaction.showModal(modal);
    }

    if (interaction.customId === 'accept' && interaction.member.roles.cache.has(config.roles.staff)) {
      const userId = interaction.message.embeds[0].footer.text;
      const member = await interaction.guild.members.fetch(userId);
      
      await member.roles.add(config.roles.accepted);
      
      const acceptEmbed = new EmbedBuilder()
        .setTitle('تم قبول تقديمك!')
        .setDescription('مرحباً بك في الفريق')
        .setColor('#00ff00')
        .setThumbnail(config.images.thumbnail)
        .setImage(config.images.banner);

      const acceptRow = new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
            .setLabel('انتظار مقابلة')
            .setURL(config.interviewServer)
            .setStyle(ButtonStyle.Link)
        );

      const channel = client.channels.cache.get(config.channels.acceptedChannel);
      await channel.send({ content: `<@${userId}>`, embeds: [acceptEmbed], components: [acceptRow] });
      
      await interaction.message.edit({
        components: [
          new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
                .setCustomId('accepted_by')
                .setLabel(`تم القبول بواسطة ${interaction.user.tag}`)
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
            )
        ]
      });
    }

    if (interaction.customId === 'reject' && interaction.member.roles.cache.has(config.roles.staff)) {
      const userId = interaction.message.embeds[0].footer.text;
      const member = await interaction.guild.members.fetch(userId);
      
      await member.roles.add(config.roles.rejected);
      
      await interaction.message.edit({
        components: [
          new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
                .setCustomId('rejected_by')
                .setLabel(`تم الرفض بواسطة ${interaction.user.tag}`)
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
            )
        ]
      });
    }

    if (interaction.customId === 'ban' && interaction.member.roles.cache.has(config.roles.staff)) {
      const userId = interaction.message.embeds[0].footer.text;
      const member = await interaction.guild.members.fetch(userId);
      
      await member.roles.add(config.roles.banned);
      
      const banEmbed = new EmbedBuilder()
        .setTitle('حظر من التقديم')
        .setDescription(`تم حظر <@${userId}> من التقديم بواسطة <@${interaction.user.id}>`)
        .setColor('#ff0000')
        .setThumbnail(config.images.thumbnail)
        .setImage(config.images.banner);

      const banRow = new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
            .setCustomId(`unban_${userId}`)
            .setLabel('إلغاء الحظر')
            .setStyle(ButtonStyle.Danger)
        );

      const banLogChannel = client.channels.cache.get(config.channels.banLogChannel);
      await banLogChannel.send({ embeds: [banEmbed], components: [banRow] });
      
      await interaction.message.edit({
        components: [
          new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
                .setCustomId('banned_by')
                .setLabel(`تم الحظر بواسطة ${interaction.user.tag}`)
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
            )
        ]
      });
    }

    if (interaction.customId.startsWith('unban_') && interaction.member.roles.cache.has(config.roles.staff)) {
      const userId = interaction.customId.split('_')[1];
      const member = await interaction.guild.members.fetch(userId);
      
      await member.roles.remove(config.roles.banned);
      await member.send('تم إلغاء الحظر عنك. يمكنك التقديم مرة أخرى.');
      
      await interaction.message.edit({ components: [] });
      await interaction.reply({ content: 'تم إلغاء الحظر بنجاح', ephemeral: true });
    }
  }

  if (interaction.isModalSubmit() && interaction.customId === 'application_modal') {
    const name = interaction.fields.getTextInputValue('name');
    const age = interaction.fields.getTextInputValue('age');
    const discordId = interaction.fields.getTextInputValue('discord_id');
    const experience = interaction.fields.getTextInputValue('experience');

    const applicationEmbed = new EmbedBuilder()
      .setTitle('طلب تقديم جديد')
      .setColor('#0099ff')
      .setThumbnail(config.images.thumbnail)
      .setImage(config.images.banner)
      .addFields(
        { name: 'الاسم', value: name },
        { name: 'العمر', value: age },
        { name: 'الايدي', value: discordId },
        { name: 'الخبرات', value: experience }
      )
      .setFooter({ text: interaction.user.id });

    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('accept')
          .setLabel('قبول')
          .setStyle(ButtonStyle.Success),
        new ButtonBuilder()
          .setCustomId('reject')
          .setLabel('رفض')
          .setStyle(ButtonStyle.Danger),
        new ButtonBuilder()
          .setCustomId('ban')
          .setLabel('حظر')
          .setStyle(ButtonStyle.Secondary)
      );

    const responseChannel = client.channels.cache.get(config.channels.responseChannel);
    await responseChannel.send({ embeds: [applicationEmbed], components: [row] });
    
    await interaction.reply({ content: 'تم إرسال طلبك بنجاح!', ephemeral: true });
  }
});

client.login(config.token);