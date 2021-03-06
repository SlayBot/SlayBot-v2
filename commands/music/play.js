// dont use these commands because theyre shitty af and broken.
const Discord = require('discord.js');
const fetchViedoInfo = require('youtube-info');
const music = require('../../utils/music.js');

module.exports = {
    name: "play",
    run: async(client, message, args, guilds) => {
        if (message.channel.type !== 'text') return;

        // get the current guild for the voice channel
        if (!guilds[message.guild.id]) {
            guilds[message.guild.id] = {
                queue: [],
                queueNames: [],
                isPlaying: false,
                dispatcher: null,
                voiceChannel: null,
                skipReq: 0,
                skippers: [],
            };
            music.writeGuilds(guilds);
        }

        let videoName = args.join(' ');

        if (message.member.voiceChannel || guilds[message.guild.id].voiceChannel != null) {
            if (guilds[message.guild.id].queue.length > 0 || guilds[message.guild.id].isPlaying) {
                music.getID(videoName, (id) => {
                    if (!id) {
                        return message.reply(', no video include that name!');
                    }
                    music.addToQueue(id, guilds[message.guild.id]);
                    fetchViedoInfo(id, (err, videoInfo) => {
                        if (err) {
                            throw new Error(err);
                        }
                        message.reply(' added to queue: **' + videoInfo.title + '**');
                        guilds[message.guild.id].queueNames.push(videoInfo.title);
                        music.writeGuilds(guilds);
                    });
                });
            }
            else {
                guilds[message.guild.id].isPlaying = true;
                music.getID(videoName, (id) => {
                    if (!id) {
                        return message.reply(', no video include that name!');
                    }
                    guilds[message.guild.id].queue.push(id);
                    music.playMusic(id, message, guilds[message.guild.id]);
                    fetchViedoInfo(id, (err, videoInfo) => {
                        if (err) {
                            throw new Error(err);
                        }
                        message.reply(' added to queue: **' + videoInfo.title + '**');
                        guilds[message.guild.id].queueNames.push(videoInfo.title);
                        music.writeGuilds(guilds);
                    });
                });
            }
        }
        else {
            return message.reply('please join a voice channel first!');
        }
}}



