async function getUserStatus() {
    const url = "https://api.lanyard.rest/v1/users/852203653162205244";

    const response = await fetch(url);

    const json = await response.json();

    //Pfp
    let pfp_url =
        "https://cdn.discordapp.com/avatars/852203653162205244/" +
        json.data.discord_user.avatar +
        ".png";

    let pfp = document.querySelector(".pfp");

    pfp.setAttribute("src", pfp_url);

    //Status
    let status_img = "/images/" + json.data.discord_status + ".png";

    let status = document.querySelector(".status");

    status.setAttribute("src", status_img);

    //tippy.js

    const instance = tippy(document.querySelector(".status"));

    instance.setProps({
        theme: "custom",
    });

    if (json.data.discord_status == "dnd") {
        instance.setContent("Do Not Disturb");
    } else if (json.data.discord_status == "online") {
        instance.setContent("Online");
    } else if (json.data.discord_status == "offline") {
        instance.setContent("Offline");
    } else {
        instance.setContent("Idle");
    }
}

getUserStatus();

async function showUserDetails() {
    const url = "https://api.lanyard.rest/v1/users/852203653162205244";

    const response = await fetch(url);

    const json = await response.json();

    let discord_username = json.data.discord_user.username;

    let discord_discriminator = json.data.discord_user.discriminator;

    $(".name").text(discord_username + " #" + discord_discriminator);
}

showUserDetails();

tippy("#cpp", {
    content: "C++",
    theme: "custom",
});

tippy("#html", {
    content: "HTML",
    theme: "custom",
});

tippy("#css", {
    content: "CSS",
    theme: "custom",
});

tippy("#js", {
    content: "JavaScript",
    theme: "custom",
});

function sendEmail() {
    let senderEmailID = document.getElementById("emailID").value;
    let senderMessage = document.getElementById("msg").value;
    let senderName = document.getElementById("name").value;

    if (senderMessage != "") {
        const Body = `<b>Sender's Name:</b> ${senderName} <br> <br>
    <b>Sender's Email Address:</b> ${senderEmailID} <br> <br>
    <b>Sender's Message:</b> ${senderMessage}`;

        Email.send({
            SecureToken: "9a40c153-9824-49f8-a4c6-cc22f56455eb",
            Host: "smtp.elasticemail.com",
            Username: "amanbahlcapricorn@gmail.com",
            Password: "808C0180ED2FB89CA826C4AD0AFB63FDB7E0",
            To: "amanbahlcapricorn@gmail.com",
            From: senderEmailID,
            Subject: "You've got an email from a user who went to your website!",
            Body: Body,
        }).then((message) => alert(message));
    }
}
