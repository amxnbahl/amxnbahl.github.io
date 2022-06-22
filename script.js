async function getUserStatus() {

            const url = "https://api.lanyard.rest/v1/users/852203653162205244";

            const response = await fetch(url);

            const json = await response.json();

            //Pfp
            let pfp_url = "https://cdn.discordapp.com/avatars/852203653162205244/" + json.data.discord_user.avatar + ".png";

            let pfp = document.querySelector('.pfp');

            pfp.setAttribute('src', pfp_url);

            //Status
            let status_img = "/images/" + json.data.discord_status + ".png";

            let status = document.querySelector('.status');

            status.setAttribute("src", status_img);

            //tippy.js

            const instance = tippy(document.querySelector('.status'));

            if (json.data.discord_status == 'dnd') {
                instance.setContent('Do Not Disturb');
            }

            else if (json.data.discord_status == 'online') {
                instance.setContent('Online');
            }

            else if (json.data.discord_status == 'offline') {
                instance.setContent('Offline');
            }

            else {
                instance.setContent('Idle');
            }

        }

        getUserStatus();

        async function showUserDetails() {

            const url = "https://api.lanyard.rest/v1/users/852203653162205244";

            const response = await fetch(url);

            const json = await response.json();

            let discord_username = json.data.discord_user.username;

            let discord_discriminator = json.data.discord_user.discriminator;

            $(".name").text(discord_username+" #"+discord_discriminator);

        }

        showUserDetails();
