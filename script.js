class MusicSharingApp {
    constructor() {
        this.musicList = [];
        this.currentPlayingIndex = -1;
        this.init();
    }

    init() {
        this.loadSampleMusic();
        this.bindEvents();
        this.displayMusicList();
    }

    // 加载预制音乐 - 在这里替换成你的4首音乐文件路径
    loadSampleMusic() {
        this.musicList = [
            {
                id: 'music-1',
                name: '第二单元打卡',
                size: 3.2,
                type: 'audio/mpeg',
                // 替换为你的第一首音乐文件URL
                url: 'https://https://cloud.189.cn/t/aQBbMbFbmaay/music1.mp3',
                duration: '03:45',
                description: '舒缓的轻音乐，适合清晨聆听'
            },
            {
                id: 'music-2', 
                name: '钢琴曲 - 月光奏鸣',
                size: 4.1,
                type: 'audio/mpeg',
                // 替换为你的第二首音乐文件URL
                url: 'https://你的域名或云存储路径/music2.mp3',
                duration: '04:20',
                description: '经典的钢琴演奏曲目'
            },
            {
                id: 'music-3',
                name: '流行乐 - 夏日回忆',
                size: 2.8,
                type: 'audio/mpeg',
                // 替换为你的第三首音乐文件URL
                url: 'https://你的域名或云存储路径/music3.mp3',
                duration: '03:15',
                description: '轻快的流行音乐'
            },
            {
                id: 'music-4',
                name: '电子乐 - 未来节奏',
                size: 3.5,
                type: 'audio/mpeg',
                // 替换为你的第四首音乐文件URL
                url: 'https://你的域名或云存储路径/music4.mp3',
                duration: '03:50',
                description: '充满科技感的电子音乐'
            }
        ];
    }

    bindEvents() {
        // 搜索事件
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.filterMusicList(e.target.value);
        });

        // 播放器控制事件
        document.getElementById('playPauseBtn').addEventListener('click', () => {
            this.togglePlayPause();
        });

        document.getElementById('prevBtn').addEventListener('click', () => {
            this.playPrevious();
        });

        document.getElementById('nextBtn').addEventListener('click', () => {
            this.playNext();
        });

        // 音频事件
        const audio = document.getElementById('mainAudio');
        audio.addEventListener('ended', () => {
            this.playNext();
        });

        audio.addEventListener('loadstart', () => {
            document.getElementById('nowPlaying').textContent = '⏳ 加载中...';
        });

        audio.addEventListener('canplay', () => {
            document.getElementById('nowPlaying').textContent = '✅ 准备播放';
        });
    }

    displayMusicList() {
        const musicListDiv = document.getElementById('musicList');
        
        musicListDiv.innerHTML = this.musicList.map((music, index) => `
            <div class="music-item">
                <div class="music-info">
                    <div class="music-name">
                        ${music.name}
                        <span class="sample-badge">官方</span>
                    </div>
                    <div class="music-meta">
                        ⏱️ 时长: ${music.duration} | 
                        📏 大小: ${music.size}MB |
                        💬 ${music.description}
                    </div>
                </div>
                <div class="music-actions">
                    <button class="play-btn" onclick="app.playMusic(${index})">▶ 播放</button>
                </div>
            </div>
        `).join('');
    }

    playMusic(index) {
        if (index < 0 || index >= this.musicList.length) return;

        const music = this.musicList[index];
        const audio = document.getElementById('mainAudio');
        const player = document.getElementById('audioPlayer');
        
        console.log('尝试播放:', music.url); // 调试信息
        
        // 停止当前播放
        audio.pause();
        
        // 设置新音频源
        audio.src = music.url;
        player.style.display = 'block';
        
        audio.play().then(() => {
            document.getElementById('nowPlaying').textContent = `🎵 正在播放: ${music.name}`;
            this.currentPlayingIndex = index;
            document.getElementById('playPauseBtn').textContent = '⏸';
        }).catch(error => {
            console.error('播放失败:', error);
            document.getElementById('nowPlaying').textContent = '❌ 播放失败，请检查音乐文件路径';
        });
    }

    togglePlayPause() {
        const audio = document.getElementById('mainAudio');
        const button = document.getElementById('playPauseBtn');
        
        if (audio.paused) {
            audio.play();
            button.textContent = '⏸';
        } else {
            audio.pause();
            button.textContent = '▶';
        }
    }

    playPrevious() {
        if (this.musicList.length === 0) return;
        
设newIndex设newIndex=this.currentPlayingIndex-1；让newIndex=这.currentPlayingIndex-1；让newIndex=这.CurrentPlayingIndex-1；
if(newIndexif(newIndexif(newIndexif(newIndex<0)newIndex=this.MusicList.Length-1；if(newIndex<0)newIndex=this.MusicList.长度-1；0)newIndex=this.musicList.length-1；如果(newIndex<0)newIndex=这.音乐列表。长度-1；0)newIndex=this.MusicList.Length-1；如果(newIndex<0)newIndex=这.MusicList.长度-1；0)newIndex=this.musicList.length-1；如果 (newIndex<0) newIndex=这.musicList.长度 - 1;
        
thisthisthisthis.playMusic(newIndex)；这.PlayMusic(newIndex)；PlayMusic(newIndex)；这.PlayMusic(newIndex)；playMusic(newIndex)；这.PlayMusic(newIndex)；playMusic(newIndex)；这.PlayMusic(newIndex);
}}

PlayNEXT(){PlayNEXT()PlayNEXT(){PlayNEXT(){{
if(thisif(thisif(thisIf(this.musicList.length===0)返回；如果(这.musicList.长度===0)返回；musicList.length===0)返回；如果(这.musicList.长度===0)返回；musicList.length===0)返回；如果(这.musicList.长度===0)返回；musicList.length===0)返回；如果 (这.musicList.长度===0) 返回;
        
设newIndex设newIndex设newIndex设newIndex=this。currentPlayingIndex+1；让newIndex=这.CurrentPlayingIndex+1；this.CurrentPlayingIndex+1；让newIndex=这.currentPlayingIndex+1；this.currentPlayingIndex+1；让newIndex=这.currentPlayingIndex+1；this.currentPlayingIndex+1；让 newIndex=这.currentPlayingIndex+1;
if(newIndexif(newIndexif(newIndexif(newIndex>=this.MusicList.length)newIndex=0；如果(newIndex>=这.musicList.长度)newIndex=0；this.musicList.长度)newIndex=0；如果(newIndex>=这.musicList.长度)newIndex=0；this.MusicList.Length)newIndex=0；如果(newIndex>=这.musicList.长度)newIndex=0；this.musicList.length)newIndex=0；如果 (newIndex>=这.musicList.长度) newIndex=0;
        
thisthisthisthis.playMusic(newIndex)；这.PlayMusic(newIndex)；PlayMusic(newIndex)；这.PlayMusic(newIndex)；playMusic(newIndex)；这.PlayMusic(newIndex)；playMusic(newIndex)；这.PlayMusic(newIndex);
}}

filterMusicList(查询){filterMusicList(查询)filterMusicList(查询){filterMusicList(查询){{
Const filteredConst filteredConst filteredConst filtered=this.musicList.filter(音乐=>Const已过滤=这.音乐列表.过滤器(音乐=>this.musicList.filter(音乐=>Const已过滤=这.音乐列表。过滤器(音乐=>this.musicList.filter(音乐=>Const已过滤=这.音乐列表。过滤器(音乐=>this.musicList.filter(音乐=>Const 已过滤=这.musicList.过滤器(音乐=>
音乐。姓名。toLowerCase()音乐。姓名。toLowerCase()音乐。姓名。toLowerCase().includes(query.ToLowerCase())||音乐.姓名.toLowerCase().包括(查询.toLowerCase())||Include(query.ToLowerCase())||音乐.姓名.toLowerCase().包括(查询.toLowerCase())||().includes(query.ToLowerCase())||音乐.姓名.toLowerCase().包括(查询.toLowerCase())||Includes(query.ToLowerCase())||音乐.姓名.toLowerCase().包括(查询.toLowerCase())||
音乐。描述。toLowerCase()音乐。描述。toLowerCase()音乐。描述。toLowerCase().includes(query.ToLowerCase())音乐.描述.toLowerCase().包括(查询.toLowerCase())包括(query.ToLowerCase())音乐.描述.toLowerCase().包括(查询.toLowerCase())().includes(query.ToLowerCase())音乐.描述.toLowerCase().包括(查询.toLowerCase())Includes(query.ToLowerCase())音乐.描述.toLowerCase().包括(查询.toLowerCase())
));););
        
Const musicListDivConst musicListDivConst musicListDivConst musicListDiv=文档.getElementById('musicList')；常量musicListDiv=文件.getElementById('音乐列表')；document.getElementById('musicList')；Const musicListDiv=文件.getElementById('音乐列表')；文档.getElementById('musicList')；Const musicListDiv=文件.getElementById('音乐列表')；document.getElementById('musicList')；Const musicListDiv=文件.getElementById('音乐列表');
        
if(filteredif(filteredif(filteredif(filtered.Length==0){如果(已过滤.长度==0){length==0){如果(已过滤.长度===0){length===0){如果(已过滤.长度===0){length===0){如果 (已过滤.长度===0) {
musicListDivmusicListDivmusicListDivmusicListDiv.innerHTML='musicListDiv.innerHTML="innerHTML='musicListDiv.innerHTML="innerHTML='musicListDiv.innerHTML="innerHTML='musicListDiv.innerHTML= ``
<div class="空状态">div class="空状态">
<p>🔍 没有找到匹配的音乐</p>p>🔍 没有找到匹配的音乐</p>
</div>/div>
`;``;`;
返回；return;
        }

musicListDiv.innerHTML=filtered.map((音乐，索引)=>{musicListDiv.innerHTML = filtered.map((music, index) => {
Const originalIndex=this.musicList.findIndex(m=>m.id===music.id)；const originalIndex = this.musicList.findIndex(m => m.id === music.id);
返回'return `
<
<
<
${music${music.name}name}${music${music.name}name}
<
<
<
Ю️ 时长：${musicЮ️ 时长：${musicЮ️ 时长：${musicЮ️ 时长：${music。duration}|duration}|Ł️ 时长：${musicЮ️ 时长：${music.duration}|duration}|duration}|duration}|⏱️ 时长: ${musicЮ️ 时长：${music.duration}|duration} | 
📏 大小：${music📏 大小：${music📏 大小：${music📏 大小：${music。大小}MB|大小}MB|📏 大小：${music📏 大小：${music.size}MB|size}MB|size}MB|size}MB|📏 大小: ${music📏 大小：${music.size}MB|size}MB |
💬 ${music💬 ${music.描述}描述
<</div>
<</div>
<<divclass="音乐-动作">"音乐-动作"=班级=
<<按钮班级="play-btn"onClick="app.playMusic(${=originalIndex onclick=)">▶播放</button>>▶播放</<
<</div>
<</div>
            `;
}).join(")；
    }
}

// 初始化应用
Const app=新MusicSharing App()；
