// video url patterns(youtube, instagram, vimeo, dailymotion, youku, mp4, ogg, webm, facebook, soundcloud)
export const patterns: {
  name: string;
  re: RegExp;
  process: (match: RegExpMatchArray) => string | boolean;
}[] = [
  {
    name: 'youtube',
    re: /\/\/(?:(?:www|m)\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:[?&](?:t=([\dhms]+)))?.*$/,
    process: (match) => {
      const ytRegExpForStart = /^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/;
      if (match[1].length === 11) {
        const youtubeId = match[1];
        let start = 0;
        if (typeof match[2] !== 'undefined') {
          const ytMatchForStart = match[2].match(ytRegExpForStart);
          if (ytMatchForStart) {
            for (let n = [3600, 60, 1], i = 0, r = n.length; i < r; i++) {
              start += typeof ytMatchForStart[i + 1] !== 'undefined' ? n[i] * parseInt(ytMatchForStart[i + 1], 10) : 0;
            }
          }
        }
        return '//www.youtube.com/embed/' + youtubeId + (start > 0 ? '?start=' + start : '');
      }
      return false;
    },
  },
  {
    name: 'vine',
    re: /\/\/vine\.co\/v\/([a-zA-Z0-9]+)/,
    process: (match) => (match[0].length ? match[0] + '/embed/simple' : false),
  },
  {
    name: 'vimeo',
    re: /\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/,
    process: (match) => (match[3].length ? 'https://player.vimeo.com/video/' + match[3] : false),
  },
  {
    name: 'dailymotion',
    re: /.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/,
    process: (match) => (match[2].length ? 'https://www.dailymotion.com/embed/video/' + match[2] : false),
  },
  {
    name: 'youku',
    re: /\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/,
    process: (match) => (match[1].length ? 'https://player.youku.com/embed/' + match[1] : false),
  },
  {
    name: 'qq',
    re: /\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^/]+)\.html\??.*/,
    process: (match) => {
      if ((match && match[1].length) || (match && match[2].length)) {
        const vid = match && match[1].length ? match[1] : match[2];
        return 'https://v.qq.com/txp/iframe/player.html?vid=' + vid + '&amp;auto=0';
      }
      return false;
    },
  },
  {
    name: 'mp4|m4v|ogg|ogv|webm',
    re: /^.+.(mp4|m4v|ogg|ogv|webm)$/,
    process: (match) => match[0],
  },
  {
    name: 'facebook',
    re: /(?:www\.|\/\/)facebook\.com\/([^/]+)\/videos\/([0-9]+)/,
    process: (match) => (match[0].length ? 'https://www.facebook.com/plugins/video.php?href=' + encodeURIComponent(match[0]) + '&show_text=0&width=560' : false),
  },
  {
    name: 'soundcloud',
    re: /(?:www\.|\/\/)soundcloud\.com\/([^/]+)\/([^/]+)/,
    process: (match) => (match[0].length ? 'https://w.soundcloud.com/player/?url=' + match[0] : false),
  },
  // {
  //   name: 'instagram',
  //   re: /(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/,
  //   process: (match) => (match[0].length ? 'https://instagram.com/p/' + match[1] + '/embed/' : false),
  // },
];
