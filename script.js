文件名: script.js

内容:
class MusicSharingApp {
    constructor() {
这.musicList=[]；这.musicList=[]；
这.currentPlayingIndex=-1；这。currentPlayingIndex=-1；
这.init()；这.init()；
}}

init(){init(){
这.loadMusicList()；这.loadMusicList()；
这.bindEvents()；这.bindEvents()；
}}

bindEvents(){bindEvents(){
Const FileInput=文件。getElementById('musicFileInput')；ConstFileInput=文件.getElementById('musicFileInput')；
Const fileNameSpan=文件。getElementById('fileName')；Const fileNameSpan=文件。getElementById('fileName')；
        
FileInput。addEventListener('更改'，(e)=>{FileInput.AddEventListener('更改'，(e)=>{
Const文件=e.目标.文件[0]；Const文件=e.目标.文件[0]；
如果 (文件) {如果 (文件) {
fileNameSpan.textContent=文件.姓名；fileNameSpan.textContent=文件.姓名；
如果(！这.isValidAudioFile(文件)){如果(！这.isValidAudioFile(文件)){
这.showStatus('请选择音频文件(MP3，WAV等)'，'错误')；这.showStatus('请选择音频文件(MP3，WAV等)'，'错误')；
FileInput。价值=”；FileInput。价值=”；
fileNameSpan.textContent='选择音乐文件'；fileNameSpan.textContent='选择音乐文件'；
}}
}}
});});

文件.getElementById('uploadForm').addEventListener('提交'，(e)=>{文件.getElementById('uploadForm').addEventListener('提交'，(e)=>{
e.preventDefault()；e.preventDefault()；
这.handleUpload()；这.handleUpload()；
});});

文件.getElementById('playPauseBtn').addEventListener('单击'，()=>{文件.getElementById('playPauseBtn').addEventListener('单击'，()=>{
这.togglePlayPause()；这.togglePlayPause()；
});});
}}

isValidAudioFile(文件){isValidAudioFile(文件){
常量音频类型=['音频/mpeg'，'音频/波'，'音频/mp4'，'音频/Ogg']；常量音频类型=['音频/mpeg'，'音频/波'，'音频/mp4'，'音频/Ogg']；
返回audioTypes。包括(文件.类型)；返回audioTypes。包括(文件.类型)；
}}

异步handleUpload(){异步handleUpload(){
Const FileInput=文件。getElementById('musicFileInput')；ConstFileInput=文件.getElementById('musicFileInput')；
Const文件=FileInput.文件[0]；Const文件=FileInput。文件[0]；
        
如果 (! 文件) {如果 (! 文件) {
这.showStatus('请选择音乐文件'，'错误')；这.showStatus('请选择音乐文件'，'错误')；
返回;返回;
}}

尝试 {尝试 {
Const musicItem={Const musicItem={
身份标识：日期.现在().toString()，身份标识：日期.现在().toString()，
姓名: 文件.姓名,姓名: 文件.姓名,
大小: 文件.大小,大小: 文件.大小,
URL:URL。createObjectURL(文件)，URL:URL。createObjectURL(文件)，
上传时间：新的日期().toISOString()上传时间：新的日期().toISOString()
};};

这.音乐列表。推(musicItem)；这.音乐列表。推(musicItem)；
这.displayMusicList()；这.displayMusicList()；
这.showStatus('上传成功！'，'成功')；这.showStatus('上传成功！', '成功');
            
FileInput。价值=”；FileInput.价值='';
文件.getElementById('fileName').textContent='选择音乐文件'；文件.getElementById('fileName').textContent='选择音乐文件';

} 赶上 (误差) {} 赶上 (误差) {
这.showStatus('上传失败'，'错误')；这.showStatus('上传失败', '错误');
}}
}}

displayMusicList(){displayMusicList() {
Const musicListDiv=文件.getElementById('音乐列表')；Const musicListDiv=文件.getElementById('音乐列表');
        
如果(这.音乐列表。长度===0){如果 (这.musicList.长度===0) {
musicListDiv.innerHTML='<p>还没有音乐，上传第一首吧！</p>'；musicListDiv.innerHTML='<p>还没有音乐，上传第一首吧！</p>';
文件名：script.js
}}

类MusicSharingApp{
构造函数(){
<div class="music-info">
这.currentPlayingIndex=-1；这.currentPlayingIndex=-1；姓名}</div>
<div class="music-meta">大小：${这这.init()；这.init()；divclass="music-meta">大小：${这.div class="music-meta">大小：${这.formatFileSize(音乐.大小)}</div>formatFileSize(音乐大小)}</div>div class="music-meta">大小：${这.formatFileSize(音乐.大小)}</div>formatFileSize(music.size)}</div>
</div>
<button class="play-btn"onclick="app.playMusic(${指数})">播放</button>
</div>
')').join(")；join(")；
}

PlayMusic(索引){PlayMusic(索引){
const music=this.musicList[index]；const music=this.musicList[index]；
常量音频=document.getElementById('mainAudio')；常量音频=document.getElementById('mainAudio')；
常量播放器=document.getElementById('audioPlayer')；常量播放器=document.getElementById('audioPlayer')；
        
audio.src=music.url；audio.src=music.url；
运动员。classList。移除(“隐藏”)；播放器.classList。移除(“隐藏”)；
文件。getElementById('NowPlaying').textContent='正在播放：${音乐.姓名}'；文件.getElementById('NowPlaying').textContent='正在播放：${音乐.姓名}'；
这。currentPlayingIndex=index；this.CurrentPlayingIndex=index；
        
音频。玩().catch(错误=>{音频。玩().catch(错误=>{
this.showStatus('播放失败'，'误差')；this.showStatus('播放失败'，'误差')；
        });
    }

togglePlayPause(){togglePlayPause(){
常量音频=document.getElementById('mainAudio')；常量音频=document.getElementById('mainAudio')；
Const按钮=文档.getElementById('playPauseBtn')；常量按钮=document.getElementById('playPauseBtn')；
        
如果(音频.美国药典){if(音频.已暂停){
audio.play()；audio.play()；
button.textContent='彷徨'；button.textContent='彷徨'；
}else{}else{
audio.pause()；audio.pause()；
按钮。textContent='▶'；按钮。textContent='▶'；
        }
    }

showStatus(消息，类型){showStatus(消息，类型){
ConstatusDiv=document.getElementById('uploadStatus')；const statusDiv=document.getElementById('uploadStatus')；
statusDiv.textContent=消息；statusDiv.textContent=消息；
statusDiv.style.color=type===='成功'？'绿色'：'红色'；statusDiv.style.color=type===='成功'？'绿色'：'红色'；
        
setTimeout(()=>{setTimeout(()=>{
statusDiv.textContent="；statusDiv.textContent="；
}, 3000);}, 3000);
    }

formatFileSize(字节){formatFileSize(字节){
返回'0Bytes'；if(bytes===0)返回'0Bytes'；
常数k=1024；常数k=1024；
常量大小=['字节'，'KB'，'MB']；常量大小=['字节'，'KB'，'MB']；
const i=Math.floor(Math.log(字节)/Math.log(k))；const i=Math.floor(Math.log(字节)/Math.log(k))；
返回parseFloat((bytes/Math.PoW(k，i)).ToFixed(2))+"+size[i]；返回parseFloat((字节/Math.POW(k，i)).TOFixed(2))+"+大小[i]；
    }
}

=
