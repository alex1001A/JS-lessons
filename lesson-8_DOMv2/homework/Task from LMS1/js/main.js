let bntAuthors = document.querySelector('.show-authors')
let bntSongs = document.querySelector('.show-songs')

let out = document.querySelector('.out')

var playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

function showItems(param) {
    out.innerHTML = ''
    playList.map(item => {
    
        let li = document.createElement('li')
        li.innerHTML = item[param]
    
        out.append(li)
    })
}

bntAuthors.addEventListener('click', () => {
    showItems('author')
})

bntSongs.addEventListener('click', () => {
    showItems('song')
})