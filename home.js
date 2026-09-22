(function () {
    function openVideoPlayer(title, videoUrl) {
        const playerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} — Player</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { width: 100%; height: 100%; background: #000; }
        body {
            display: flex;
            flex-direction: column;
            font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
            color: #fff;
            overflow: hidden;
        }
        .player-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            padding: 0.9rem 1.5rem;
            background: linear-gradient(180deg, #0a1520 0%, #05080c 100%);
            border-bottom: 1px solid #1a2a3a;
            flex-shrink: 0;
        }
        .player-bar h1 {
            font-size: 1rem;
            font-weight: 550;
            color: #e8f0fa;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .player-bar .close-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            background: #1a2a3a;
            color: #b8d0e8;
            font-size: 0.8rem;
            font-weight: 550;
            padding: 0.5rem 1rem;
            border-radius: 40px;
            text-decoration: none;
            border: 1px solid #2a4055;
            transition: all 0.2s;
            flex-shrink: 0;
        }
        .player-bar .close-btn:hover {
            background: #223a50;
            color: #fff;
        }
        .video-wrapper {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #000;
        }
        video {
            width: 100%;
            height: 100%;
            max-height: 100%;
            background: #000;
        }
    </style>
    </head>
    <body>
        <div class="player-bar">
            <h1>▶ ${title}</h1>
            <a class="close-btn" href="javascript:window.close()">✕ Close</a>
        </div>
        <div class="video-wrapper">
            <video controls autoplay src="${videoUrl}"></video>
        </div>
    </body>
    </html>`;

        const blob = new Blob([playerHTML], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
    }

    function hasLink(url) {
        if (!url) return false;
        const trimmed = String(url).trim();
        if (trimmed === '' || trimmed === '#') return false;
        return true;
    }

    // ===== SEASON 1: AINCRAD ARC =====
    const aincrad = [
        { title: "The World of Swords",                link: "https://animerevival.xyz/episodes/sword-art-online-1x1/",   original: "https://zorotv.com.in/sword-art-online-episode-1/" },
        { title: "Beater",                             link: "https://animerevival.xyz/episodes/sword-art-online-1x2/",   original: "https://zorotv.com.in/sword-art-online-episode-2/" },
        { title: "Progressive: Aria of a Starless Night", link: "",   original: "https://drive.google.com/file/d/12YtpKlzS_iGHSBNYkU7KNoUXhSNEnkb5/view?usp=sharing" },
        { title: "Progressive: Scherzo of Deep Night", link: "#",   original: "https://www.facebook.com/share/v/1ERuJXLaQ5/" },
        { title: "The Red-Nosed Reindeer",             link: "https://animerevival.xyz/episodes/sword-art-online-1x3/",   original: "https://zorotv.com.in/sword-art-online-episode-3/" },
        { title: "The Black Swordsman",                link: "https://animerevival.xyz/episodes/sword-art-online-1x4/",   original: "https://zorotv.com.in/sword-art-online-episode-4/" },
        { title: "Murder in the Safe Zone",            link: "https://animerevival.xyz/episodes/sword-art-online-1x5/",   original: "https://zorotv.com.in/sword-art-online-episode-5/" },
        { title: "Illusionary Avenger",                link: "https://animerevival.xyz/episodes/sword-art-online-1x6/",   original: "https://zorotv.com.in/sword-art-online-episode-6/" },
        { title: "The Temperature of the Heart",       link: "https://animerevival.xyz/episodes/sword-art-online-1x7/",   original: "https://zorotv.com.in/sword-art-online-episode-7/" },
        { title: "The Sword Dance of Black and White", link: "https://animerevival.xyz/episodes/sword-art-online-1x8/",   original: "https://zorotv.com.in/sword-art-online-episode-8/" },
        { title: "The Blue-Eyed Demon",                link: "https://animerevival.xyz/episodes/sword-art-online-1x9/",   original: "https://zorotv.com.in/sword-art-online-episode-9/" },
        { title: "Crimson Killing Intent",             link: "https://animerevival.xyz/episodes/sword-art-online-1x10/",  original: "https://zorotv.com.in/sword-art-online-episode-10/" },
        { title: "Girl of the Morning Dew",            link: "https://animerevival.xyz/episodes/sword-art-online-1x11/",  original: "https://zorotv.com.in/sword-art-online-episode-11/" },
        { title: "Yui's Heart",                        link: "https://animerevival.xyz/episodes/sword-art-online-1x12/",  original: "https://zorotv.com.in/sword-art-online-episode-12/" },
        { title: "Edge of Hell's Abyss",               link: "https://animerevival.xyz/episodes/sword-art-online-1x13/",  original: "https://zorotv.com.in/sword-art-online-episode-13/" },
        { title: "The End of the World",               link: "https://animerevival.xyz/episodes/sword-art-online-1x14/",  original: "https://zorotv.com.in/sword-art-online-episode-14/" }
    ];

    // ===== SEASON 1: FAIRY DANCE ARC =====
    const fairyDance = [
        { title: "Return",                              link: "https://animerevival.xyz/episodes/sword-art-online-1x15/",  original: "https://zorotv.com.in/sword-art-online-episode-15/" },
        { title: "Land of the Fairies",                 link: "https://animerevival.xyz/episodes/sword-art-online-1x16/",  original: "https://zorotv.com.in/sword-art-online-episode-16/" },
        { title: "Captive Queen",                       link: "https://animerevival.xyz/episodes/sword-art-online-1x17/",  original: "https://zorotv.com.in/sword-art-online-episode-17/" },
        { title: "To the World Tree",                   link: "https://animerevival.xyz/episodes/sword-art-online-1x18/",  original: "https://zorotv.com.in/sword-art-online-episode-18/" },
        { title: "The Legrue Corridor",                 link: "https://animerevival.xyz/episodes/sword-art-online-1x19/",  original: "https://zorotv.com.in/sword-art-online-episode-19/" },
        { title: "General of the Blazing Flame",        link: "https://animerevival.xyz/episodes/sword-art-online-1x20/",  original: "https://zorotv.com.in/sword-art-online-episode-20/" },
        { title: "The Truth About Alfheim",             link: "https://animerevival.xyz/episodes/sword-art-online-1x21/",  original: "https://zorotv.com.in/sword-art-online-episode-21/" },
        { title: "The Grand Quest",                     link: "https://animerevival.xyz/episodes/sword-art-online-1x22/",  original: "https://zorotv.com.in/sword-art-online-episode-22/" },
        { title: "Bonds",                               link: "https://animerevival.xyz/episodes/sword-art-online-1x23/",  original: "https://zorotv.com.in/sword-art-online-episode-23/" },
        { title: "Gilded Hero",                         link: "https://animerevival.xyz/episodes/sword-art-online-1x24/",  original: "https://zorotv.com.in/sword-art-online-episode-24/" },
        { title: "The World is Seed",                   link: "https://animerevival.xyz/episodes/sword-art-online-1x25/",  original: "https://zorotv.com.in/sword-art-online-episode-25/" },
        { title: "TV Special: Extra Edition",        link: "",                                                       original: "https://www.bilibili.tv/en/video/4796423265851392" }
    ];

    // ===== SEASON 2: PHANTOM BULLET ARC =====
    const phantomBullet = [
        { title: "The World of Guns",                   link: "https://animerevival.xyz/episodes/sword-art-online-2x1/",   original: "https://zorotv.com.in/sword-art-online-ii-episode-1/" },
        { title: "Cold-Hearted Sniper",                 link: "https://animerevival.xyz/episodes/sword-art-online-2x2/",   original: "https://zorotv.com.in/sword-art-online-ii-episode-2/" },
        { title: "Memories of Blood",                   link: "https://animerevival.xyz/episodes/sword-art-online-2x3/",   original: "https://zorotv.com.in/sword-art-online-ii-episode-3/" },
        { title: "GGO",                                 link: "https://animerevival.xyz/episodes/sword-art-online-2x4/",   original: "https://zorotv.com.in/sword-art-online-ii-episode-4/" },
        { title: "Guns and Swords",                     link: "https://animerevival.xyz/episodes/sword-art-online-2x5/",   original: "https://zorotv.com.in/sword-art-online-ii-episode-5/" },
        { title: "Showdown in the Wilderness",          link: "https://animerevival.xyz/episodes/sword-art-online-2x6/",   original: "https://zorotv.com.in/sword-art-online-ii-episode-6/" },
        { title: "Crimson Memories",                    link: "https://animerevival.xyz/episodes/sword-art-online-2x7/",   original: "https://zorotv.com.in/sword-art-online-ii-episode-7/" },
        { title: "Bullet of Bullets",                   link: "https://animerevival.xyz/episodes/sword-art-online-2x8/",   original: "https://zorotv.com.in/sword-art-online-ii-episode-8/" },
        { title: "Death Gun",                           link: "https://animerevival.xyz/episodes/sword-art-online-2x9/",   original: "https://zorotv.com.in/sword-art-online-ii-episode-9/" },
        { title: "Death Chase",                         link: "https://animerevival.xyz/episodes/sword-art-online-2x10/",  original: "https://zorotv.com.in/sword-art-online-ii-episode-10/" },
        { title: "What It Means to Be Strong",          link: "https://animerevival.xyz/episodes/sword-art-online-2x11/",  original: "https://zorotv.com.in/sword-art-online-ii-episode-11/" },
        { title: "The Bullet of a Phantom",             link: "https://animerevival.xyz/episodes/sword-art-online-2x12/",  original: "https://zorotv.com.in/sword-art-online-ii-episode-12/" },
        { title: "Phantom Bullet",                      link: "https://animerevival.xyz/episodes/sword-art-online-2x13/",  original: "https://zorotv.com.in/sword-art-online-ii-episode-13/" },
        { title: "One Little Step",                     link: "https://animerevival.xyz/episodes/sword-art-online-2x14/",  original: "https://zorotv.com.in/sword-art-online-ii-episode-14/" }
    ];

    // ===== SEASON 2: CALIBUR ARC =====
    const calibur = [
        { title: "The Queen of the Lakes",              link: "https://animerevival.xyz/episodes/sword-art-online-2x15/",  original: "https://zorotv.com.in/sword-art-online-ii-episode-15/" },
        { title: "The King of the Frost Giants",        link: "https://animerevival.xyz/episodes/sword-art-online-2x16/",  original: "https://zorotv.com.in/sword-art-online-ii-episode-16/" },
        { title: "Excaliber",                           link: "https://animerevival.xyz/episodes/sword-art-online-2x17/",  original: "https://zorotv.com.in/sword-art-online-ii-episode-17/" }
    ];

    // ===== SEASON 2: MOTHER'S ROSARIO ARC =====
    const mothersRosario = [
        { title: "Forest House",                        link: "https://animerevival.xyz/episodes/sword-art-online-2x18/",  original: "https://zorotv.com.in/sword-art-online-ii-episode-18/" },
        { title: "The Absolute Sword",                  link: "https://animerevival.xyz/episodes/sword-art-online-2x19/",  original: "https://zorotv.com.in/sword-art-online-ii-episode-19/" },
        { title: "Sleeping Knights",                    link: "https://animerevival.xyz/episodes/sword-art-online-2x20/",  original: "https://zorotv.com.in/sword-art-online-ii-episode-20/" },
        { title: "The Swordsman's Memorial",            link: "https://animerevival.xyz/episodes/sword-art-online-2x21/",  original: "https://zorotv.com.in/sword-art-online-ii-episode-21/" },
        { title: "Journey's End",                       link: "https://animerevival.xyz/episodes/sword-art-online-2x22/",  original: "https://zorotv.com.in/sword-art-online-ii-episode-22/" },
        { title: "Dream Beginning",                     link: "https://animerevival.xyz/episodes/sword-art-online-2x23/",  original: "https://zorotv.com.in/sword-art-online-ii-episode-23/" },
        { title: "Mother's Rosario",                    link: "https://animerevival.xyz/episodes/sword-art-online-2x24/",  original: "https://zorotv.com.in/sword-art-online-ii-episode-24/" },
        { title: "Movie: Ordinal Scale",             link: "",  original: "https://www.bilibili.tv/en/video/4789658858160640"  }
    ];

    // ===== SEASON 3: ALICIZATION — HUMAN REALM ARC =====
    const alicization = [
        { title: "Underworld",                          link: "", original: "https://zorotv.com.in/sword-art-online-alicization-episode-1/" },
        { title: "The Demon Tree",                      link: "", original: "https://zorotv.com.in/sword-art-online-alicization-episode-2/" },
        { title: "The End Mountains",                   link: "", original: "https://zorotv.com.in/sword-art-online-alicization-episode-3/" },
        { title: "Departure",                           link: "", original: "https://zorotv.com.in/sword-art-online-alicization-episode-4/" },
        { title: "Ocean Turtle",                        link: "", original: "https://zorotv.com.in/sword-art-online-alicization-episode-5/" },
        { title: "Project Alicization",                 link: "", original: "https://zorotv.com.in/sword-art-online-alicization-episode-6/" },
        { title: "Swordcraft Academy",                  link: "", original: "https://zorotv.com.in/sword-art-online-alicization-episode-7/" },
        { title: "Swordsman's Pride",                   link: "", original: "https://zorotv.com.in/sword-art-online-alicization-episode-8/" },
        { title: "Nobles' Responsibilities",            link: "", original: "https://zorotv.com.in/sword-art-online-alicization-episode-9/" },
        { title: "Taboo Index",                         link: "", original: "https://zorotv.com.in/sword-art-online-alicization-episode-10/" },
        { title: "Central Cathedral",                   link: "", original: "https://zorotv.com.in/sword-art-online-alicization-episode-11/" },
        { title: "The Sage of the Library",             link: "", original: "https://zorotv.com.in/sword-art-online-alicization-episode-12/" },
        { title: "Ruler and Mediator",                  link: "", original: "https://zorotv.com.in/sword-art-online-alicization-episode-13/" },
        { title: "The Crimson Knight",                  link: "", original: "https://zorotv.com.in/sword-art-online-alicization-episode-14/" },
        { title: "The Relentless Knight",               link: "", original: "https://zorotv.com.in/sword-art-online-alicization-episode-15/" },
        { title: "The Osamanthus Knight",               link: "", original: "https://zorotv.com.in/sword-art-online-alicization-episode-16/" },
        { title: "Right-eye Seal",                      link: "", original: "https://zorotv.com.in/sword-art-online-alicization-episode-17/" },
        { title: "The Hero of the Center",              link: "", original: "https://zorotv.com.in/sword-art-online-alicization-episode-18/" },
        { title: "The Seal of the Right Eye",           link: "", original: "https://zorotv.com.in/sword-art-online-alicization-episode-19/" },
        { title: "Synthesize",                          link: "", original: "https://zorotv.com.in/sword-art-online-alicization-episode-20/" },
        { title: "The 32nd Knight",                     link: "", original: "https://zorotv.com.in/sword-art-online-alicization-episode-21/" },
        { title: "Titan of the Twilight",               link: "", original: "https://zorotv.com.in/sword-art-online-alicization-episode-22/" },
        { title: "Administrator",                       link: "", original: "https://zorotv.com.in/sword-art-online-alicization-episode-23/" },
        { title: "My Hero",                             link: "", original: "https://zorotv.com.in/sword-art-online-alicization-episode-24/" }
    ];

    // ===== SEASON 3: WAR OF UNDERWORLD ARC =====
    const warOfUnderworld = [
        { title: "Reflection",                          link: "", original: "https://zorotv.com.in/sword-art-online-alicization-war-of-underworld-episode-1/" },
        { title: "In the Far East",                     link: "", original: "https://zorotv.com.in/sword-art-online-alicization-war-of-underworld-episode-2/" },
        { title: "The Dark Territory",                  link: "", original: "https://zorotv.com.in/sword-art-online-alicization-war-of-underworld-episode-3/" },
        { title: "The Final Load Experiment",           link: "", original: "https://zorotv.com.in/sword-art-online-alicization-war-of-underworld-episode-4/" },
        { title: "Dark Territory",                      link: "", original: "https://zorotv.com.in/sword-art-online-alicization-war-of-underworld-episode-5/" },
        { title: "The Night Before Battle",             link: "", original: "https://zorotv.com.in/sword-art-online-alicization-war-of-underworld-episode-6/" },
        { title: "Battle of the Knights",               link: "", original: "https://zorotv.com.in/sword-art-online-alicization-war-of-underworld-episode-7/" },
        { title: "Stigma of the Disqualified",          link: "", original: "https://zorotv.com.in/sword-art-online-alicization-war-of-underworld-episode-8/" },
        { title: "Blood and Life",                      link: "", original: "https://zorotv.com.in/sword-art-online-alicization-war-of-underworld-episode-9/" },
        { title: "Sword and Fist",                      link: "", original: "https://zorotv.com.in/sword-art-online-alicization-war-of-underworld-episode-10/" },
        { title: "Stacia, the Goddess of Creation",     link: "", original: "https://zorotv.com.in/sword-art-online-alicization-war-of-underworld-episode-11/" },
        { title: "Heartless Choice",                    link: "", original: "https://zorotv.com.in/sword-art-online-alicization-war-of-underworld-episode-12/" },
        { title: "Ray of Light",                        link: "", original: "https://zorotv.com.in/sword-art-online-alicization-war-of-underworld-part-2-episode-1/" },
        { title: "The War of Underworld",               link: "", original: "https://zorotv.com.in/sword-art-online-alicization-war-of-underworld-part-2-episode-2/" },
        { title: "End to Eternity",                     link: "", original: "https://zorotv.com.in/sword-art-online-alicization-war-of-underworld-part-2-episode-3/" },
        { title: "Instigation",                         link: "", original: "https://zorotv.com.in/sword-art-online-alicization-war-of-underworld-part-2-episode-4/" },
        { title: "Code 871",                            link: "", original: "https://zorotv.com.in/sword-art-online-alicization-war-of-underworld-part-2-episode-5/" },
        { title: "Prince of Hell",                      link: "", original: "https://zorotv.com.in/sword-art-online-alicization-war-of-underworld-part-2-episode-6/" },
        { title: "Memories",                            link: "", original: "https://zorotv.com.in/sword-art-online-alicization-war-of-underworld-part-2-episode-7/" },
        { title: "Awakening",                           link: "", original: "https://zorotv.com.in/sword-art-online-alicization-war-of-underworld-part-2-episode-8/" },
        { title: "The Night-Sky Sword",                 link: "", original: "https://zorotv.com.in/sword-art-online-alicization-war-of-underworld-part-2-episode-9/" },
        { title: "Beyond Time",                         link: "", original: "https://zorotv.com.in/sword-art-online-alicization-war-of-underworld-part-2-episode-10/" },
        { title: "Alice",                               link: "", original: "https://zorotv.com.in/sword-art-online-alicization-war-of-underworld-part-2-episode-11/" },
        { title: "New World",                           link: "", original: "https://zorotv.com.in/sword-art-online-alicization-war-of-underworld-part-2-episode-12/" }
    ];

    function buildTagalogBtn(ep) {
        const btn = document.createElement('a');
        btn.className = 'episode-btn';
        btn.href = ep.link;
        btn.target = '_blank';
        btn.setAttribute('aria-label', `Watch ${ep.title} (Tagalog)`);
        btn.innerHTML = `
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            Tagalog
        `;
        return btn;
    }

    function buildOriginalBtn(ep) {
        const btn = document.createElement('a');
        btn.className = 'episode-btn original';
        btn.href = ep.original;
        btn.target = '_blank';
        btn.rel = 'noopener noreferrer';
        btn.setAttribute('aria-label', `Watch ${ep.title} (Original)`);
        btn.innerHTML = `
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            Original
        `;
        return btn;
    }

    function buildPlayBtn(ep) {
        const btn = document.createElement('a');
        btn.className = 'episode-btn play';
        btn.href = '#';
        btn.setAttribute('aria-label', `Play ${ep.title}`);
        btn.innerHTML = `
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            Play
        `;
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openVideoPlayer(ep.title, ep.video);
        });
        return btn;
    }

    function renderEpisode(ep, index) {
        const item = document.createElement('div');
        item.className = 'episode-item';

        const titleDiv = document.createElement('div');
        titleDiv.className = 'episode-title';

        const numSpan = document.createElement('span');
        numSpan.className = 'ep-num';
        numSpan.textContent = String(index + 1).padStart(2, '0');

        titleDiv.appendChild(numSpan);
        titleDiv.appendChild(document.createTextNode(ep.title));

        const btnGroup = document.createElement('div');
        btnGroup.className = 'episode-buttons';

        if (ep.video) {
            btnGroup.appendChild(buildPlayBtn(ep));
        } else {
            
            if (hasLink(ep.link)) {
                btnGroup.appendChild(buildTagalogBtn(ep));
            }
            
            if (hasLink(ep.original)) {
                btnGroup.appendChild(buildOriginalBtn(ep));
            }
        }

        item.appendChild(titleDiv);
        item.appendChild(btnGroup);
        return item;
    }

    function renderList(list, containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`⚠️ #${containerId} not found`);
            return;
        }
        list.forEach((ep, i) => container.appendChild(renderEpisode(ep, i)));
    }

    renderList(aincrad,           'episodeList');
    renderList(fairyDance,        'fairyDanceList');
    renderList(phantomBullet,     'phantomBulletList');
    renderList(calibur,           'caliburList');
    renderList(mothersRosario,    'mothersRosarioList');
    renderList(alicization,       'alicizationList');
    renderList(warOfUnderworld,   'warOfUnderworldList');

    const total = aincrad.length + fairyDance.length + phantomBullet.length +
                  calibur.length + mothersRosario.length + alicization.length +
                  warOfUnderworld.length;
    console.log(`✅ SAO complete list loaded — ${total} entries total.`);
})();