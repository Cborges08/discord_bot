const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('qrcode')
		.setDescription('Recive a string and reply whit a QRCode')
    .addStringOption(option =>
      option.setName('text')
        .setDescription('Text to qr')
        .setRequired(true))
    .addStringOption(option =>
        option.setName('width')
            .setDescription('tamanho')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('heigth')
            .setDescription('tamanho')
            .setRequired(true)),
	async execute(interaction) {
    const text = interaction.options.getString('text')
    const width = interaction.options.getString('width')
    const heigth = interaction.options.getString('heigth')
    console.log(text);
    const encodedText = encodeURIComponent(text)
    const encodedwidth = encodeURIComponent(width)
    const encodedheigth = encodeURIComponent(heigth)
    console.log(encodedText)
		await interaction.reply(`https://chart.googleapis.com/chart?cht=qr&chs=${encodedwidth}x${encodedheigth}&chl=${encodedText}`);
	},
};