// ==UserScript==
// @name         live2D看板娘
// @namespace    live2d.js
// @version      1.1.3
// @description  给你的网页添加看板娘
// @author       HCLonely
// @include      *://*/*
// @require      https://greasyfork.org/scripts/388035-jquery/code/$jQuery.js?version=721233
// @require      https://greasyfork.org/scripts/388036-jqueryui/code/$jQueryUI.js?version=722718
// @require      https://cdn.bootcss.com/sweetalert/2.1.2/sweetalert.min.js
// @supportURL   https://blog.hclonely.com/posts/f09c9fef/
// @homepage     https://blog.hclonely.com/posts/f09c9fef/
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// @run-at       document-end
// @grant        GM_registerMenuCommand
// @grant        GM_info
// @noframes
// @connect      live2d.hclonely.com
// @connect      cdn.jsdelivr.net
// @connect      *
// ==/UserScript==

(function ($) {
  'use strict'

  if ($('.waifu').length > 0) return 0

  const live2d_conf = {
    modelAPI: 'https://live2d.hclonely.com/', // 可根据https://github.com/fghrsh/live2d_api自建api
    staticAPI: 'https://cdn.jsdelivr.net',
    tipsMessage: 'waifu-tips.json',
    hitokotoAPI: 'rand',
    modelId: 2,
    modelTexturesId: 28,
    showToolMenu: true,
    canCloseLive2d: true,
    canSwitchModel: true,
    canSwitchTextures: true,
    canSwitchHitokoto: true,
    canTakeScreenshot: true,
    canTurnToHomePage: true,
    canTurnToAboutPage: true,
    modelStorage: true,
    modelRandMode: 'switch',
    modelTexturesRandMode: 'rand',
    showHitokoto: true,
    showF12Status: true,
    showF12Message: false,
    showF12OpenMsg: true,
    showCopyMessage: true,
    showWelcomeMessage: true,
    waifuSize: '280x250',
    waifuTipsSize: '250x70',
    waifuFontSize: '12px',
    waifuToolFont: '14px',
    waifuToolLine: '20px',
    waifuToolTop: '0px',
    waifuMinWidth: '768px',
    waifuEdgeSide: 'right:15',
    waifuDraggable: 'disable',
    waifuDraggableRevert: true,
    waifuDraggableSave: false,
    waifuDraggableClear: false,
    homePageUrl: 'auto',
    aboutPageUrl: 'https://blog.hclonely.com/posts/f09c9fef/',
    screenshotCaptureName: 'live2d.png'
  }

  window.live2d_settings = GM_getValue('live2d_settings') || { ...live2d_conf }

  if (live2d_settings.staticAPI.includes('hclonely')) {
    live2d_settings.staticAPI = 'https://cdn.jsdelivr.net'
    GM_setValue('live2d_settings', live2d_settings)
  }

  const setting_des = Array() // eslint-disable-line no-array-constructor
  setting_des.modelAPI = '自建 API 修改这里'
  setting_des.staticAPI = '模型 API 修改这里（不要带最后的"/"）,如果你使用的默认api, 请自行替换成"https://cdn.jsdelivr.net"'
  setting_des.tipsMessage = '同目录下可省略路径'
  setting_des.hitokotoAPI = '一言 API，可选 \'lwl12.com\', \'hitokoto.cn\', \'fghrsh.net\', \'jinrishici.com\'(古诗词), \'rand\'(随机)'
  setting_des.modelId = '默认模型 ID，可在 F12 控制台找到'
  setting_des.modelTexturesId = '默认材质 ID，可在 F12 控制台找到'
  setting_des.showToolMenu = '显示 工具栏          ，可选 true(真), false(假)'
  setting_des.canCloseLive2d = '显示 关闭看板娘  按钮，可选 true(真), false(假)'
  setting_des.canSwitchModel = '显示 模型切换    按钮，可选 true(真), false(假)'
  setting_des.canSwitchTextures = '显示 材质切换    按钮，可选 true(真), false(假)'
  setting_des.canSwitchHitokoto = '显示 一言切换    按钮，可选 true(真), false(假)'
  setting_des.canTakeScreenshot = '显示 看板娘截图  按钮，可选 true(真), false(假)'
  setting_des.canTurnToHomePage = '显示 返回首页    按钮，可选 true(真), false(假)'
  setting_des.canTurnToAboutPage = '显示 跳转关于页  按钮，可选 true(真), false(假)'
  setting_des.modelStorage = '记录 ID (刷新后恢复)，可选 true(真), false(假)'
  setting_des.modelRandMode = '模型切换，可选 \'rand\'(随机), \'switch\'(顺序)'
  setting_des.modelTexturesRandMode = '材质切换，可选 \'rand\'(随机), \'switch\'(顺序)'
  setting_des.showHitokoto = '显示一言'
  setting_des.showF12Status = '显示加载状态'
  setting_des.showF12Message = '显示看板娘消息'
  setting_des.showF12OpenMsg = '显示控制台打开提示'
  setting_des.showCopyMessage = '显示 复制内容 提示'
  setting_des.showWelcomeMessage = '显示进入面页欢迎词'
  setting_des.waifuSize = '看板娘大小，例如 \'280x250\', \'600x535\''
  setting_des.waifuTipsSize = '提示框大小，例如 \'250x70\', \'570x150\''
  setting_des.waifuFontSize = '提示框字体，例如 \'12px\', \'30px\''
  setting_des.waifuToolFont = '工具栏字体，例如 \'14px\', \'36px\''
  setting_des.waifuToolLine = '工具栏行高，例如 \'20px\', \'36px\''
  setting_des.waifuToolTop = '工具栏顶部边距，例如 \'0px\', \'-60px\''
  setting_des.waifuMinWidth = '面页小于 指定宽度 隐藏看板娘，例如 \'disable\'(禁用), \'768px\''
  setting_des.waifuEdgeSide = '看板娘贴边方向，例如 \'left:0\'(靠左 0px), \'right:30\'(靠右 30px)'
  setting_des.waifuDraggable = '拖拽样式，例如 \'disable\'(禁用), \'axis-x\'(只能水平拖拽), \'unlimited\'(自由拖拽)'
  setting_des.waifuDraggableRevert = '松开鼠标还原拖拽位置，可选 true(真), false(假)'
  setting_des.waifuDraggableSave = '是否保存拖拽后的位置，刷新后依然生效，需要将上面的选项和下面的选项都设置为false，可选 true(真), false(假)'
  setting_des.waifuDraggableClear = '清空上次保存的位置，可选 true(真), false(假)'
  setting_des.homePageUrl = '主页地址，可选 \'auto\'(自动), \'{URL 网址}\''
  setting_des.aboutPageUrl = '关于页地址, \'{URL 网址}\''
  setting_des.screenshotCaptureName = '看板娘截图文件名，例如 \'live2d.png\''

  function userConf () {
    const conf = GM_getValue('live2d_settings') || live2d_conf
    let html = '<form id="l2d-conf"><table class="hclonely"><thead><tr><td>名称</td><td>值</td><td>描述</td></tr></thead><tbody>'
    for (const e in setting_des) {
      html += `<tr><th>${e}</th><th>${typeof conf[e] === 'boolean' || typeof conf[e] === 'undefined' ? `<input name="${e}" type="checkbox" ${conf[e] ? ' checked="checked" : ''}>` : `<input name="${e}" type="text" value="${conf[e]}">`}</th><th>${setting_des[e]}</th></tr>`
    }
    html += '</tbody></table></form>'
    swal({
      closeOnClickOutside: false,
      title: 'live2d看板娘设置',
      content: $(html)[0],
      buttons: {
        confirm: '保存',
        cancel: '关闭'
      }
    }).then((value) => {
      if (value) {
        const l2d_conf = {}
        $('#l2d-conf').serializeArray().map((e, i) => {
          l2d_conf[e.name] = e.value === 'on' ? true : e.value
        })
        GM_setValue('modelId', l2d_conf.modelId)
        GM_setValue('modelTexturesId', l2d_conf.modelTexturesId)
        GM_setValue('live2d_settings', l2d_conf)
        swal('保存成功，刷新页面后生效！', '', 'success')
      }
    })
  }
  GM_registerMenuCommand('设置', userConf)

  const waifuJSON = {
    waifu: {
      console_open_msg: ['哈哈，你打开了控制台，是想要看看我的秘密吗？'],
      copy_message: ['你都复制了些什么呀，转载要记得加上出处哦'],
      screenshot_message: ['照好了嘛，是不是很可爱呢？'],
      hidden_message: ['我们还能再见面的吧…'],
      load_rand_textures: ['我还没有其他衣服呢', '我的新衣服好看嘛'],
      hour_tips: {
        't5-7': ['早上好！一日之计在于晨，美好的一天就要开始了'],
        't7-11': ['上午好！工作顺利嘛，不要久坐，多起来走动走动哦！'],
        't11-14': ['中午了，工作了一个上午，现在是午餐时间！'],
        't14-17': ['午后很容易犯困呢，今天的运动目标完成了吗？'],
        't17-19': ['傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~'],
        't19-21': ['晚上好，今天过得怎么样？'],
        't21-23': ['已经这么晚了呀，早点休息吧，晚安~'],
        't23-5': ['你是夜猫子呀？这么晚还不睡觉，明天起的来嘛'],
        default: ['嗨~ 快来逗我玩吧！']
      },
      referrer_message: {
        localhost: ['欢迎阅读<span style="color:#0099cc;">『', '』</span>', ' - '],
        baidu: ['Hello! 来自 百度搜索 的朋友<br>你是搜索 <span style="color:#0099cc;">', '</span> 找到的我吗？'],
        so: ['Hello! 来自 360搜索 的朋友<br>你是搜索 <span style="color:#0099cc;">', '</span> 找到的我吗？'],
        google: ['Hello! 来自 谷歌搜索 的朋友<br>欢迎阅读<span style="color:#0099cc;">『', '』</span>', ' - '],
        default: ['Hello! 来自 <span style="color:#0099cc;">', '</span> 的朋友'],
        none: ['欢迎阅读<span style="color:#0099cc;">『', '』</span>', ' - ']
      },
      referrer_hostname: {
        'example.com': ['示例网站'],
        'www.fghrsh.net': ['FGHRSH 的博客']
      },
      model_message: {
        1: ['来自 Potion Maker 的 Pio 酱 ~'],
        2: ['来自 Potion Maker 的 Tia 酱 ~']
      },
      hitokoto_api_message: {
        'lwl12.com': ['这句一言来自 <span style="color:#0099cc;">『{source}』</span>', '，是 <span style="color:#0099cc;">{creator}</span> 投稿的', '。'],
        'fghrsh.net': ['这句一言出处是 <span style="color:#0099cc;">『{source}』</span>，是 <span style="color:#0099cc;">FGHRSH</span> 在 {date} 收藏的！'],
        'jinrishici.com': ['这句诗词出自 <span style="color:#0099cc;">《{title}》</span>，是 {dynasty}诗人 {author} 创作的！'],
        'hitokoto.cn': ['这句一言来自 <span style="color:#0099cc;">『{source}』</span>，是 <span style="color:#0099cc;">{creator}</span> 在 hitokoto.cn 投稿的。']
      }
    },
    mouseover: [
      { selector: "a[href]:not([href^='javascript']):not([href$='#'])", text: ['要看看 <span style="color:#0099cc;">{text}</span> 么？'] },
      { selector: '.fui-home', text: ['点击前往首页，想回到上一页可以使用浏览器的后退功能哦'] },
      { selector: '.fui-chat', text: ['一言一语，一颦一笑。一字一句，一颗赛艇。'] },
      { selector: '.fui-eye', text: ['嗯··· 要切换 看板娘 吗？'] },
      { selector: '.fui-user', text: ['喜欢换装 Play 吗？'] },
      { selector: '.fui-photo', text: ['要拍张纪念照片吗？'] },
      { selector: '.fui-info-circle', text: ['这里有关于我的信息呢'] },
      { selector: '.fui-cross', text: ['你不喜欢我了吗...'] },
      { selector: '#tor_show', text: ['翻页比较麻烦吗，点击可以显示这篇文章的目录呢'] },
      { selector: '#comment_go', text: ['想要去评论些什么吗？'] },
      { selector: '#night_mode', text: ['深夜时要爱护眼睛呀'] },
      { selector: '#qrcode', text: ['手机扫一下就能继续看，很方便呢'] },
      { selector: '.comment_reply', text: ['要吐槽些什么呢'] },
      { selector: '#back-to-top', text: ['回到开始的地方吧'] },
      { selector: '#author', text: ['该怎么称呼你呢'] },
      { selector: '#mail', text: ['留下你的邮箱，不然就是无头像人士了'] },
      { selector: '#url', text: ['你的家在哪里呢，好让我去参观参观'] },
      { selector: '#textarea', text: ['认真填写哦，垃圾评论是禁止事项'] },
      { selector: '.OwO-logo', text: ['要插入一个表情吗'] },
      { selector: '#csubmit', text: ['要[提交]^(Commit)了吗，首次评论需要审核，请耐心等待~'] },
      { selector: 'video', text: ['这是一个视频哦'] },
      { selector: 'input[name=s]', text: ['找不到想看的内容？搜索看看吧'] },
      { selector: '.previous', text: ['去上一页看看吧'] },
      { selector: '.next', text: ['去下一页看看吧'] },
      { selector: '.dropdown-toggle', text: ['这里是菜单'] },
      { selector: 'c-player a.play-icon', text: ['想要听点音乐吗'] },
      { selector: 'c-player div.time', text: ['在这里可以调整<span style="color:#0099cc;">播放进度</span>呢'] },
      { selector: 'c-player div.volume', text: ['在这里可以调整<span style="color:#0099cc;">音量</span>呢'] },
      { selector: 'c-player div.list-button', text: ['<span style="color:#0099cc;">播放列表</span>里都有什么呢'] },
      { selector: 'c-player div.lyric-button', text: ['有<span style="color:#0099cc;">歌词</span>的话就能跟着一起唱呢'] },
      { selector: '.waifu #live2d', text: ['干嘛呢你，快把手拿开', '鼠…鼠标放错地方了！'] }
    ],
    click: [
      {
        selector: '.waifu #live2d',
        text: [
          '是…是不小心碰到了吧',
          '萝莉控是什么呀',
          '你看到我的小熊了吗',
          '再摸的话我可要报警了！⌇●﹏●⌇',
          '110吗，这里有个变态一直在摸我(ó﹏ò｡)'
        ]
      }
    ],
    seasons: [
      { date: '01/01', text: ['<span style="color:#0099cc;">元旦</span>了呢，新的一年又开始了，今年是{year}年~'] },
      { date: '02/14', text: ['又是一年<span style="color:#0099cc;">情人节</span>，{year}年找到对象了嘛~'] },
      { date: '03/08', text: ['今天是<span style="color:#0099cc;">妇女节</span>！'] },
      { date: '03/12', text: ['今天是<span style="color:#0099cc;">植树节</span>，要保护环境呀'] },
      { date: '04/01', text: ['悄悄告诉你一个秘密~<span style="background-color:#34495e;">今天是愚人节，不要被骗了哦~</span>'] },
      { date: '05/01', text: ['今天是<span style="color:#0099cc;">五一劳动节</span>，计划好假期去哪里了吗~'] },
      { date: '06/01', text: ['<span style="color:#0099cc;">儿童节</span>了呢，快活的时光总是短暂，要是永远长不大该多好啊…'] },
      { date: '09/03', text: ['<span style="color:#0099cc;">中国人民抗日战争胜利纪念日</span>，铭记历史、缅怀先烈、珍爱和平、开创未来。'] },
      { date: '09/10', text: ['<span style="color:#0099cc;">教师节</span>，在学校要给老师问声好呀~'] },
      { date: '10/01', text: ['<span style="color:#0099cc;">国庆节</span>，新中国已经成立69年了呢'] },
      { date: '11/05-11/12', text: ['今年的<span style="color:#0099cc;">双十一</span>是和谁一起过的呢~'] },
      { date: '12/20-12/31', text: ['这几天是<span style="color:#0099cc;">圣诞节</span>，主人肯定又去剁手买买买了~'] }
    ]
  }

  /****************************************************************************************************/

  String.prototype.render = function (context) {
    var tokenReg = /(\\)?\{([^\{\}\\]+)(\\)?\}/g

    return this.replace(tokenReg, function (word, slash1, token, slash2) {
      if (slash1 || slash2) { return word.replace('\\', '') }

      var variables = token.replace(/\s/g, '').split('.')
      var currentObject = context
      var i, length, variable

      for (i = 0, length = variables.length; i < length; ++i) {
        variable = variables[i]
        currentObject = currentObject[variable]
        if (currentObject === undefined || currentObject === null) return ''
      }
      return currentObject
    })
  }

  var re = /x/
  console.log(re)
  var x = document.createElement('div')
  console.debug(x)

  function empty (obj) { return !!(typeof obj === 'undefined' || obj == null || obj == '') }
  function getRandText (text) { return Array.isArray(text) ? text[Math.floor(Math.random() * text.length + 1) - 1] : text }

  function showMessage (text, timeout, flag) {
    if (flag || GM_getValue('waifu-text') === '' || GM_getValue('waifu-text') === null) {
      if (Array.isArray(text)) text = text[Math.floor(Math.random() * text.length + 1) - 1]
      if (live2d_settings.showF12Message) console.log('[Message]', text.replace(/<[^<>]+>/g, ''))

      if (flag) GM_setValue('waifu-text', text)

      $('.waifu-tips').stop()
      $('.waifu-tips').html(text).fadeTo(200, 1)
      if (timeout === undefined) timeout = 5000
      hideMessage(timeout)
    }
  }

  function hideMessage (timeout) {
    $('.waifu-tips').stop().css('opacity', 1)
    if (timeout === undefined) timeout = 5000
    window.setTimeout(function () { GM_setValue('waifu-text', '') }, timeout)
    $('.waifu-tips').delay(timeout).fadeTo(200, 0)
  }

  function dateFormat (fmt, date) {
    let ret
    const opt = {
      'Y+': date.getFullYear().toString(), // 年
      'm+': (date.getMonth() + 1).toString(), // 月
      'd+': date.getDate().toString(), // 日
      'H+': date.getHours().toString(), // 时
      'M+': date.getMinutes().toString(), // 分
      'S+': date.getSeconds().toString() // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    }
    for (const k in opt) {
      ret = new RegExp('(' + k + ')').exec(fmt)
      if (ret) {
        fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')))
      };
    };
    return fmt
  }
  function initModel (waifuPath, type) {
    /* console welcome message */
    console.log('%c ' + { msg: "\n\nく__,.ヘヽ.　　　　/　,ー､ 〉\n　　　　　＼ ', !-─‐-i　/　/´\n　　　 　 ／｀ｰ'　　　 L/／｀ヽ､\n　　 　 /　 ／,　 /|　 ,　 ,　　　 ',\n　　　ｲ 　/ /-‐/　ｉ　L_ ﾊ ヽ!　 i\n　　　 ﾚ ﾍ 7ｲ｀ﾄ ﾚ'ｧ-ﾄ､!ハ|　 |\n　　　　 !,/7 '0'　　 ´0iソ| 　 |\n　　　　 |.从\"　　_　　 ,,,, / |./ 　 |\n　　　　 ﾚ'| i＞.､,,__　_,.イ / 　.i 　|\n　　　　　 ﾚ'| | / k_７_/ﾚ'ヽ,　ﾊ.　|\n　　　　　　 | |/i 〈|/　 i,.ﾍ |　i|\n　　　　　　.|/ /　ｉ： 　 ﾍ!　　＼|\n　　　 　 　 kヽ>､ﾊ 　 _,.ﾍ､ 　 /､!\n　　　　　　 !'〈//｀Ｔ´', ＼ ｀'7'ｰr'\n　　　　　　 ﾚ'ヽL__|___i,___,ンﾚ|ノ\n　　　　　 　　　ﾄ-,/　|___./\n　　　　　 　　　'ｰ'　　!_,.:\nLive2D 看板娘 v" + GM_info.script.version + ' / HCLonely ' + dateFormat('YYYY-mm-dd', new Date(GM_info.script.lastModified || GM_info.script.lastUpdated)) + '\n' }.msg, 'color:#ff3d3d')

    /* 判断 JQuery */
    if (typeof ($.ajax) !== 'function') typeof (jQuery.ajax) === 'function' ? window.$ = jQuery : console.log('[Error] JQuery is not defined.')

    /* 加载看板娘样式 */
    live2d_settings.waifuSize = live2d_settings.waifuSize.split('x')
    live2d_settings.waifuTipsSize = live2d_settings.waifuTipsSize.split('x')
    live2d_settings.waifuEdgeSide = live2d_settings.waifuEdgeSide.split(':')

    $('#live2d').attr('width', live2d_settings.waifuSize[0])
    $('#live2d').attr('height', live2d_settings.waifuSize[1])
    $('.waifu').css('width', live2d_settings.waifuSize[0])
    $('.waifu').css('height', live2d_settings.waifuSize[1])
    $('.waifu-tips').width(live2d_settings.waifuTipsSize[0])
    $('.waifu-tips').height(live2d_settings.waifuTipsSize[1])
    $('.waifu-tips').css('top', live2d_settings.waifuToolTop)
    $('.waifu-tips').css('font-size', live2d_settings.waifuFontSize)
    $('.waifu-tool').css('font-size', live2d_settings.waifuToolFont)
    $('.waifu-tool span').css('line-height', live2d_settings.waifuToolLine)

    if (live2d_settings.waifuEdgeSide[0] == 'left') $('.waifu').css('left', live2d_settings.waifuEdgeSide[1] + 'px')
    else if (live2d_settings.waifuEdgeSide[0] == 'right') $('.waifu').css('right', live2d_settings.waifuEdgeSide[1] + 'px')

    if (live2d_settings.waifuDraggableClear) GM_setValue('waifuPosition', false)

    if (live2d_settings.waifuDraggableSave && GM_getValue('waifuPosition')) {
      const position = GM_getValue('waifuPosition')
      Object.keys(position).forEach(function (key) {
        $('.waifu').css(key, position[key] + 'px')
      })
    }

    window.waifuResize = function () { $(window).width() <= 1 number(live2d_settings.waifuminwidth.replace('px', '')) ? $('.waifu').hide() : $('.waifu').show() } if (live2d_settings.waifuminwidth !="disable" ) { waifuresize(); $(window).resize(function () waifuresize() }) try (live2d_settings.waifudraggable="=" 'axis-x') $('.waifu').draggable({ axis: 'x', revert: live2d_settings.waifudraggablerevert, stop: function (event, ui) (!live2d_settings.waifudraggablerevert && live2d_settings.waifudraggablesave) gm_setvalue('waifuposition', ui.position) else 'unlimited') $('.waifu').css('transition', 'all .3s ease-in-out') catch (err) console.log('[error] jquery ui is not defined.') live2d_settings.homepageurl="live2d_settings.homePageUrl" =="auto" window.location.protocol + ' window.location.hostname (window.location.protocol="=" 'file:' live2d_settings.modelapi.substr(0, 2)="=" ') live2d_settings.modelapi="http:" $('.waifu-tool .fui-home').click(function window.location="window.location.origin" .fui-info-circle').click(function window.open(live2d_settings.aboutpageurl) (typeof (waifupath)="==" 'object') loadtipsmessage(waifupath); gm_xmlhttprequest({ method: 'get', url: waifupath="=" '' live2d_settings.tipsmessage (waifupath.substr(waifupath.length - 15)="=" 'waifu-tips.json' 'waifu-tips.json'), responsetype: 'json', anonymous: true, onload: (result) loadtipsmessage(result.response) (!live2d_settings.showtoolmenu) $('.waifu-tool').hide() (!live2d_settings.cancloselive2d) .fui-cross').hide() (!live2d_settings.canswitchmodel) .fui-eye').hide() (!live2d_settings.canswitchtextures) .fui-user').hide() (!live2d_settings.canswitchhitokoto) .fui-chat').hide() (!live2d_settings.cantakescreenshot) .fui-photo').hide() (!live2d_settings.canturntohomepage) .fui-home').hide() (!live2d_settings.canturntoaboutpage) .fui-info-circle').hide() (waifupath="==" undefined) var modelid="GM_getValue('modelId')" modeltexturesid="GM_getValue('modelTexturesId')" (!live2d_settings.modelstorage || null) loadmodel(modelid, modeltexturesid) loadmodel (modelid, (live2d_settings.modelstorage) gm_setvalue('modelid', modelid) gm_setvalue('modeltexturesid', loadlive2d('live2d', 'get ?id=" + modelId + " -' modeltexturesid, (live2d_settings.showf12status console.log('[status]', 'live2d', '模型', '-' '加载完成') null)) loadtipsmessage window.waifu_tips="result" $.each(result.mouseover, (index, tips) $(document).on('mouseover', tips.selector, (!($(this)[0].tagname="=" 'a' ($(this).text().trim()="=" ''))) text="getRandText(tips.text)" text: $(this).text() showmessage(text, 3000, true) $.each(result.click, $(document).on('click', $.each(result.seasons, now="new" date() after="tips.date.split('-')[0]" before="tips.date.split('-')[1]" ((after.split(' ')[0] <="now.getMonth()" now.getmonth() (after.split(' ')[1] now.getdate() year: now.getfullyear() 6000, (live2d_settings.showf12openmsg) object.defineproperty(x, 'id', get: showmessage(getrandtext(result.waifu.console_open_msg), 5000, re.tostring="function" return (live2d_settings.showcopymessage) $(document).on('copy', showmessage(getrandtext(result.waifu.copy_message), .fui-photo').click(function showmessage(getrandtext(result.waifu.screenshot_message), window.live2d.capturename="live2d_settings.screenshotCaptureName" window.live2d.captureframe="true" .fui-cross').click(function gm_setvalue('waifu-dsiplay', 'none') showmessage(getrandtext(result.waifu.hidden_message), 1300, window.settimeout(function }, 1300) window.showwelcomemessage="function" (window.location.href="=" live2d_settings.homepageurl) date()).gethours() (now> 23 || now <= 5) text="getRandText(result.waifu.hour_tips['t23-5'])" else if (now> 5 && now <= 7) text="getRandText(result.waifu.hour_tips['t5-7'])" else if (now> 7 && now <= 11) text="getRandText(result.waifu.hour_tips['t7-11'])" else if (now> 11 && now <= 14) text="getRandText(result.waifu.hour_tips['t11-14'])" else if (now> 14 && now <= 17) text="getRandText(result.waifu.hour_tips['t14-17'])" else if (now> 17 && now <= 19) text="getRandText(result.waifu.hour_tips['t17-19'])" else if (now> 19 && now <= 21) text="getRandText(result.waifu.hour_tips['t19-21'])" else if (now> 21 && now <= 1 23) text="getRandText(result.waifu.hour_tips['t21-23'])" else } { var referrer_message="result.waifu.referrer_message" if (document.referrer !="=" '') referrer="document.createElement('a')" referrer.href="document.referrer" domain="referrer.hostname.split('.')[1]" (window.location.hostname="=" referrer.hostname) + document.title.split(referrer_message.localhost[2])[0] referrer_message.localhost[1] (domain="=" 'baidu') referrer.search.split('&wd=")[1].split(" &')[0] referrer_message.baidu[1] 'so') referrer.search.split('&q=")[1].split(" referrer_message.so[1] 'google') document.title.split(referrer_message.google[2])[0] referrer_message.google[1] $.each(result.waifu.referrer_hostname, function (i, val) (i="=" referrer.hostname="getRandText(val)" }) referrer_message.default[1] document.title.split(referrer_message.none[2])[0] referrer_message.none[1] showmessage(text, 6000, true) }; (live2d_settings.showwelcomemessage) showwelcomemessage(result) waifu_tips="result.waifu" loadothermodel () modelid="modelStorageGetItem('modelId')" modelrandmode="live2d_settings.modelRandMode" gm_xmlhttprequest({ method: 'get', url: live2d_settings.modelapi ' ?id=" + modelId,
        responseType: " json', anonymous: true, onload: (data) const result="data.response" loadmodel(result.model.id) message="result.model.message" $.each(waifu_tips.model_message, result.model.id) showmessage(message, 3000, loadrandtextures modeltexturesid="modelStorageGetItem('modelTexturesId')" modeltexturesrandmode="live2d_settings.modelTexturesRandMode" '_textures -' modeltexturesid, responsetype: 'json', (result.textures.id="=" && (modeltexturesid="=" || 0)) showmessage(waifu_tips.load_rand_textures[0], showmessage(waifu_tips.load_rand_textures[1], loadmodel(modelid, result.textures.id) modelstoragegetitem (key) return live2d_settings.modelstorage ? gm_getvalue(key) : * 检测用户活动状态，并在空闲时显示一言 (live2d_settings.showhitokoto) window.getacted="true;" window.hitokototimer="30000;" window.hitokotointerval="true" $(document).mousemove(function (e) getacted="true" }).keydown(function setinterval(function (!getacted) ifacted(); elseacted() }, 1000) ifacted (!hitokotointerval) hitokotointerval="true" hitokototimer="window.setInterval(showHitokotoActed," 30000) elseacted = false window.clearinterval(hitokototimer) showhitokotoacted ($(document)[0].visibilitystate="=" 'visible') showhitokoto() showhitokoto (e="false)" api="e" live2d_settings.hitokotoapi switch (api) case 'lwl12.com': 'https: api.lwl12.com hitokoto v1?encode="realjson'," (!empty(result.source)) (!empty(result.author)) source: result.source, creator: result.author window.settimeout(function showmessage(text waifu_tips.hitokoto_api_message['lwl12.com'][2], 5000) showmessage(result.text, 5000, break 'fghrsh.net': api.fghrsh.net rand ?encode="jsc&uid=3335'," date: result.date showmessage(result.hitokoto, 'jinrishici.com': v2.jinrishici.com one.json', (!empty(result.data.origin.title)) title: result.data.origin.title, dynasty: result.data.origin.dynasty, author: result.data.origin.author showmessage(result.data.content, 'hitokoto.cn': v1.hitokoto.cn', (!empty(result.from)) result.from, result.creator default: hitokotoapiarr="['lwl12.com'," 'fghrsh.net', 'jinrishici.com', 'hitokoto.cn'] showhitokoto(hitokotoapiarr[math.floor((math.random() 4))]) hidden, visibilitychange (typeof document.hidden 'undefined') hidden="hidden" document.mshidden document.webkithidden handlevisibilitychange (!document[hidden]) showmessage('主人，欢迎回来！', 4000, (!(typeof document.addeventlistener="==" 'undefined' typeof document[hidden]="==" 'undefined')) document.addeventlistener(visibilitychange, handlevisibilitychange, false) videostatus="false" $('video').on('timeupdate', (this.paused) showmessage('你怎么暂停了呀', (videostatus="=" showmessage('你在看什么啊，让我康康', (math.abs(this.currenttime - this.duration 2) < 1) showmessage('进度条已过半，且看且珍惜', audiostatus="false" $('audio').on('timeupdate', showmessage('怎么不听了呀', (audiostatus="=" showmessage('你在听什么呀，这么好听', $('.waifu-tool .fui-eye').click(function loadothermodel() .fui-user').click(function loadrandtextures() .fui-chat').click(function ** ********************************************live2d.js************************************************************** !(function (t) i (r) (e[r]) e[r].exports o="e[r]" i: r, l: !1, exports: {} t[r].call(o.exports, o, o.exports, i), o.l="!0," o.exports e="{}" i.m="t," i.c="e," i.d="function" (t, e, r) i.o(t, e) object.defineproperty(t, configurable: enumerable: !0, get: r i.n="function" t.__esmodule t .default i.d(e, 'a', e), i.o="function" i) object.prototype.hasownproperty.call(t, i.p , i(i.s="4)" }([function i, 'use strict' this.live2dmodel="null," this.modelmatrix="null," this.eyeblink="null," this.physics="null," this.pose="null," this.debugmode="!1," this.initialized="!1," this.updating="!1," this.alpha="1," this.accalpha="0," this.lipsync="!1," this.lipsyncvalue="0," this.accelx="0," this.accely="0," this.accelz="0," this.dragx="0," this.dragy="0," this.starttimemsec="null," this.mainmotionmanager="new" h(), this.expressionmanager="new" this.motions="{}," this.expressions="{}," this.istexloaded="!1" amotion.prototype.constructor.call(this), this.paramlist="new" array() n this.id this.type="-1," this.value="null" s this.nextblinktime="null," this.statestarttime="null," this.blinkintervalmsec="null," this.eyestate="g.STATE_FIRST," this.closingmotionmsec="100," this.closedmotionmsec="50," this.openingmotionmsec="150," this.closeifzero="!0," this.eyeid_l="PARAM_EYE_L_OPEN" this.eyeid_r="PARAM_EYE_R_OPEN" _ this.tr="new" float32array(16), this.identity() a _.prototype.constructor.call(this), this.width="t," this.height="i" h motionqueuemanager.prototype.constructor.call(this), this.currentpriority="null," this.reservepriority="null," this.super="MotionQueueManager.prototype" l this.physicslist="new" array(), $ this.lasttime="0," this.lastmodel="null," this.partsgroups="new" u this.paramindex="-1," this.partsindex="-1," this.link="null," p this.epsilon="0.01," this.facetargetx="0," this.facetargety="0," this.facex="0," this.facey="0," this.facevx="0," this.facevy="0," this.lasttimesec="0" f this.screenleft="null," this.screenright="null," this.screentop="null," this.screenbottom="null," this.maxleft="null," this.maxright="null," this.maxtop="null," this.maxbottom="null," this.max="Number.MAX_VALUE," this.min="0" c d="0" r.prototype.getmodelmatrix="function" r.prototype.setalpha="function"> 0.999 && (t = 1), t < 0.001 && (t = 0), this.alpha = t
    }, r.prototype.getAlpha = function () {
      return this.alpha
    }, r.prototype.isInitialized = function () {
      return this.initialized
    }, r.prototype.setInitialized = function (t) {
      this.initialized = t
    }, r.prototype.isUpdating = function () {
      return this.updating
    }, r.prototype.setUpdating = function (t) {
      this.updating = t
    }, r.prototype.getLive2DModel = function () {
      return this.live2DModel
    }, r.prototype.setLipSync = function (t) {
      this.lipSync = t
    }, r.prototype.setLipSyncValue = function (t) {
      this.lipSyncValue = t
    }, r.prototype.setAccel = function (t, i, e) {
      this.accelX = t, this.accelY = i, this.accelZ = e
    }, r.prototype.setDrag = function (t, i) {
      this.dragX = t, this.dragY = i
    }, r.prototype.getMainMotionManager = function () {
      return this.mainMotionManager
    }, r.prototype.getExpressionManager = function () {
      return this.expressionManager
    }, r.prototype.loadModelData = function (t, i) {
      var e = c.getPlatformManager()
      this.debugMode && e.log('Load model : ' + t)
      var r = this
      e.loadLive2DModel(t, function (t) {
        if (r.live2DModel = t, r.live2DModel.saveParam(), Live2D.getError() != 0) return void console.error('Error : Failed to loadModelData().')
        r.modelMatrix = new a(r.live2DModel.getCanvasWidth(), r.live2DModel.getCanvasHeight()), r.modelMatrix.setWidth(2), r.modelMatrix.setCenterPosition(0, 0), i(r.live2DModel)
      })
    }, r.prototype.loadTexture = function (t, i, e) {
      d++
      var r = c.getPlatformManager()
      this.debugMode && r.log('Load Texture : ' + i)
      var o = this
      r.loadTexture(this.live2DModel, t, i, function () {
        d--, d == 0 && (o.isTexLoaded = !0), typeof e === 'function' && e()
      })
    }, r.prototype.loadMotion = function (t, i, e) {
      var r = c.getPlatformManager()
      this.debugMode && r.log('Load Motion : ' + i)
      var o = null
      var n = this
      r.loadBytes(i, function (i) {
        o = Live2DMotion.loadMotion(i), t != null && (n.motions[t] = o), e(o)
      })
    }, r.prototype.loadExpression = function (t, i, e) {
      var r = c.getPlatformManager()
      this.debugMode && r.log('Load Expression : ' + i)
      var n = this
      r.loadBytes(i, function (i) {
        t != null && (n.expressions[t] = o.loadJson(i)), typeof e === 'function' && e()
      })
    }, r.prototype.loadPose = function (t, i) {
      var e = c.getPlatformManager()
      this.debugMode && e.log('Load Pose : ' + t)
      var r = this
      try {
        e.loadBytes(t, function (t) {
          r.pose = $.load(t), typeof i === 'function' && i()
        })
      } catch (t) {
        console.warn(t)
      }
    }, r.prototype.loadPhysics = function (t) {
      var i = c.getPlatformManager()
      this.debugMode && i.log('Load Physics : ' + t)
      var e = this
      try {
        i.loadBytes(t, function (t) {
          e.physics = l.load(t)
        })
      } catch (t) {
        console.warn(t)
      }
    }, r.prototype.hitTestSimple = function (t, i, e) {
      if (this.live2DModel === null) return !1
      var r = this.live2DModel.getDrawDataIndex(t)
      if (r < 0) return !1
      for (var o = this.live2DModel.getTransformedPoints(r), n = this.live2DModel.getCanvasWidth(), s = 0, _ = this.live2DModel.getCanvasHeight(), a = 0, h = 0; h < o.length; h += 2) {
        var l = o[h]
        var $ = o[h + 1]
        l < n && (n = l), l > s && (s = l), $ < _ && (_ = $), $ > a && (a = $)
      }
      var u = this.modelMatrix.invertTransformX(i)
      var p = this.modelMatrix.invertTransformY(e)
      return n <= u && <="s" _ p }, r.prototype.hittestsimplecustom="function" (t, i, e, r) { return this.live2dmodel !="=" null (e>= t[0] && e <= i[0] && r <="t[1]">= i[1])
    }, o.prototype = new AMotion(), o.EXPRESSION_DEFAULT = 'DEFAULT', o.TYPE_SET = 0, o.TYPE_ADD = 1, o.TYPE_MULT = 2, o.loadJson = function (t) {
      var i = new o()
      var e = c.getPlatformManager()
      var r = e.jsonParseFromBytes(t)
      if (i.setFadeIn(parseInt(r.fade_in) > 0 ? parseInt(r.fade_in) : 1e3), i.setFadeOut(parseInt(r.fade_out) > 0 ? parseInt(r.fade_out) : 1e3), r.params == null) return i
      var s = r.params
      var _ = s.length
      i.paramList = []
      for (var a = 0; a < _; a++) {
        var h = s[a]
        var l = h.id.toString()
        var $ = parseFloat(h.val)
        var u = o.TYPE_ADD
        var p = h.calc != null ? h.calc.toString() : 'add'
        if ((u = p === 'add' ? o.TYPE_ADD : p === 'mult' ? o.TYPE_MULT : p === 'set' ? o.TYPE_SET : o.TYPE_ADD) == o.TYPE_ADD) {
          var f = h.def == null ? 0 : parseFloat(h.def)
          $ -= f
        } else if (u == o.TYPE_MULT) {
          var f = h.def == null ? 1 : parseFloat(h.def)
          f == 0 && (f = 1), $ /= f
        }
        var d = new n()
        d.id = l, d.type = u, d.value = $, i.paramList.push(d)
      }
      return i
    }, o.prototype.updateParamExe = function (t, i, e, r) {
      for (var n = this.paramList.length - 1; n >= 0; --n) {
        var s = this.paramList[n]
        s.type == o.TYPE_ADD ? t.addToParamFloat(s.id, s.value, e) : s.type == o.TYPE_MULT ? t.multParamFloat(s.id, s.value, e) : s.type == o.TYPE_SET && t.setParamFloat(s.id, s.value, e)
      }
    }, s.prototype.calcNextBlink = function () {
      return UtSystem.getUserTimeMSec() + Math.random() * (2 * this.blinkIntervalMsec - 1)
    }, s.prototype.setInterval = function (t) {
      this.blinkIntervalMsec = t
    }, s.prototype.setEyeMotion = function (t, i, e) {
      this.closingMotionMsec = t, this.closedMotionMsec = i, this.openingMotionMsec = e
    }, s.prototype.updateParam = function (t) {
      var i; var e = UtSystem.getUserTimeMSec()
      var r = 0
      switch (this.eyeState) {
        case g.STATE_CLOSING:
          r = (e - this.stateStartTime) / this.closingMotionMsec, r >= 1 && (r = 1, this.eyeState = g.STATE_CLOSED, this.stateStartTime = e), i = 1 - r
          break
        case g.STATE_CLOSED:
          r = (e - this.stateStartTime) / this.closedMotionMsec, r >= 1 && (this.eyeState = g.STATE_OPENING, this.stateStartTime = e), i = 0
          break
        case g.STATE_OPENING:
          r = (e - this.stateStartTime) / this.openingMotionMsec, r >= 1 && (r = 1, this.eyeState = g.STATE_INTERVAL, this.nextBlinkTime = this.calcNextBlink()), i = r
          break
        case g.STATE_INTERVAL:
          this.nextBlinkTime < e && (this.eyeState = g.STATE_CLOSING, this.stateStartTime = e), i = 1
          break
        case g.STATE_FIRST:
        default:
          this.eyeState = g.STATE_INTERVAL, this.nextBlinkTime = this.calcNextBlink(), i = 1
      }
      this.closeIfZero || (i = -i), t.setParamFloat(this.eyeID_L, i), t.setParamFloat(this.eyeID_R, i)
    }
    var g = function () { }
    g.STATE_FIRST = 'STATE_FIRST', g.STATE_INTERVAL = 'STATE_INTERVAL', g.STATE_CLOSING = 'STATE_CLOSING', g.STATE_CLOSED = 'STATE_CLOSED', g.STATE_OPENING = 'STATE_OPENING', _.mul = function (t, i, e) {
      var r; var o; var n; var s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      for (r = 0; r < 4; r++) for (o = 0; o < 4; o++) for (n = 0; n < 4; n++) s[r + 4 * o] += t[r + 4 * n] * i[n + 4 * o]
      for (r = 0; r < 16; r++) e[r] = s[r]
    }, _.prototype.identity = function () {
      for (var t = 0; t < 16; t++) this.tr[t] = t % 5 == 0 ? 1 : 0
    }, _.prototype.getArray = function () {
      return this.tr
    }, _.prototype.getCopyMatrix = function () {
      return new Float32Array(this.tr)
    }, _.prototype.setMatrix = function (t) {
      if (this.tr != null && this.tr.length == this.tr.length) for (var i = 0; i < 16; i++) this.tr[i] = t[i]
    }, _.prototype.getScaleX = function () {
      return this.tr[0]
    }, _.prototype.getScaleY = function () {
      return this.tr[5]
    }, _.prototype.transformX = function (t) {
      return this.tr[0] * t + this.tr[12]
    }, _.prototype.transformY = function (t) {
      return this.tr[5] * t + this.tr[13]
    }, _.prototype.invertTransformX = function (t) {
      return (t - this.tr[12]) / this.tr[0]
    }, _.prototype.invertTransformY = function (t) {
      return (t - this.tr[13]) / this.tr[5]
    }, _.prototype.multTranslate = function (t, i) {
      var e = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, i, 0, 1]
      _.mul(e, this.tr, this.tr)
    }, _.prototype.translate = function (t, i) {
      this.tr[12] = t, this.tr[13] = i
    }, _.prototype.translateX = function (t) {
      this.tr[12] = t
    }, _.prototype.translateY = function (t) {
      this.tr[13] = t
    }, _.prototype.multScale = function (t, i) {
      var e = [t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
      _.mul(e, this.tr, this.tr)
    }, _.prototype.scale = function (t, i) {
      this.tr[0] = t, this.tr[5] = i
    }, a.prototype = new _(), a.prototype.setPosition = function (t, i) {
      this.translate(t, i)
    }, a.prototype.setCenterPosition = function (t, i) {
      var e = this.width * this.getScaleX()
      var r = this.height * this.getScaleY()
      this.translate(t - e / 2, i - r / 2)
    }, a.prototype.top = function (t) {
      this.setY(t)
    }, a.prototype.bottom = function (t) {
      var i = this.height * this.getScaleY()
      this.translateY(t - i)
    }, a.prototype.left = function (t) {
      this.setX(t)
    }, a.prototype.right = function (t) {
      var i = this.width * this.getScaleX()
      this.translateX(t - i)
    }, a.prototype.centerX = function (t) {
      var i = this.width * this.getScaleX()
      this.translateX(t - i / 2)
    }, a.prototype.centerY = function (t) {
      var i = this.height * this.getScaleY()
      this.translateY(t - i / 2)
    }, a.prototype.setX = function (t) {
      this.translateX(t)
    }, a.prototype.setY = function (t) {
      this.translateY(t)
    }, a.prototype.setHeight = function (t) {
      var i = t / this.height
      var e = -i
      this.scale(i, e)
    }, a.prototype.setWidth = function (t) {
      var i = t / this.width
      var e = -i
      this.scale(i, e)
    }, h.prototype = new MotionQueueManager(), h.prototype.getCurrentPriority = function () {
      return this.currentPriority
    }, h.prototype.getReservePriority = function () {
      return this.reservePriority
    }, h.prototype.reserveMotion = function (t) {
      return !(this.reservePriority >= t) && (!(this.currentPriority >= t) && (this.reservePriority = t, !0))
    }, h.prototype.setReservePriority = function (t) {
      this.reservePriority = t
    }, h.prototype.updateParam = function (t) {
      var i = MotionQueueManager.prototype.updateParam.call(this, t)
      return this.isFinished() && (this.currentPriority = 0), i
    }, h.prototype.startMotionPrio = function (t, i) {
      return i == this.reservePriority && (this.reservePriority = 0), this.currentPriority = i, this.startMotion(t, !1)
    }, l.load = function (t) {
      for (var i = new l(), e = c.getPlatformManager(), r = e.jsonParseFromBytes(t), o = r.physics_hair, n = o.length, s = 0; s < n; s++) {
        var _ = o[s]
        var a = new PhysicsHair()
        var h = _.setup
        var $ = parseFloat(h.length)
        var u = parseFloat(h.regist)
        var p = parseFloat(h.mass)
        a.setup($, u, p)
        for (var f = _.src, d = f.length, g = 0; g < d; g++) {
          var y = f[g]
          var m = y.id
          var T = PhysicsHair.Src.SRC_TO_X
          var P = y.ptype
          P === 'x' ? T = PhysicsHair.Src.SRC_TO_X : P === 'y' ? T = PhysicsHair.Src.SRC_TO_Y : P === 'angle' ? T = PhysicsHair.Src.SRC_TO_G_ANGLE : UtDebug('live2d', 'Invalid parameter:PhysicsHair.Src')
          var S = parseFloat(y.scale)
          var v = parseFloat(y.weight)
          a.addSrcParam(T, m, S, v)
        }
        for (var L = _.targets, M = L.length, g = 0; g < M; g++) {
          var E = L[g]
          var m = E.id
          var T = PhysicsHair.Target.TARGET_FROM_ANGLE
          var P = E.ptype
          P === 'angle' ? T = PhysicsHair.Target.TARGET_FROM_ANGLE : P === 'angle_v' ? T = PhysicsHair.Target.TARGET_FROM_ANGLE_V : UtDebug('live2d', 'Invalid parameter:PhysicsHair.Target')
          var S = parseFloat(E.scale)
          var v = parseFloat(E.weight)
          a.addTargetParam(T, m, S, v)
        }
        i.physicsList.push(a)
      }
      return i
    }, l.prototype.updateParam = function (t) {
      for (var i = UtSystem.getUserTimeMSec() - this.startTimeMSec, e = 0; e < this.physicsList.length; e++) this.physicsList[e].update(t, i)
    }, $.load = function (t) {
      for (var i = new $(), e = c.getPlatformManager(), r = e.jsonParseFromBytes(t), o = r.parts_visible, n = o.length, s = 0; s < n; s++) {
        for (var _ = o[s], a = _.group, h = a.length, l = new Array(), p = 0; p < h; p++) {
          var f = a[p]
          var d = new u(f.id)
          if (l[p] = d, f.link != null) {
            var g = f.link
            var y = g.length
            d.link = new Array()
            for (var m = 0; m < y; m++) {
              var T = new u(g[m])
              d.link.push(T)
            }
          }
        }
        i.partsGroups.push(l)
      }
      return i
    }, $.prototype.updateParam = function (t) {
      if (t != null) {
        t != this.lastModel && this.initParam(t), this.lastModel = t
        var i = UtSystem.getUserTimeMSec()
        var e = this.lastTime == 0 ? 0 : (i - this.lastTime) / 1e3
        this.lastTime = i, e < 0 && (e = 0)
        for (var r = 0; r < this.partsGroups.length; r++) this.normalizePartsOpacityGroup(t, this.partsGroups[r], e), this.copyOpacityOtherParts(t, this.partsGroups[r])
      }
    }, $.prototype.initParam = function (t) {
      if (t != null) {
        for (var i = 0; i < this.partsGroups.length; i++) {
          for (var e = this.partsGroups[i], r = 0; r < e.length; r++) {
            e[r].initIndex(t)
            var o = e[r].partsIndex
            var n = e[r].paramIndex
            if (!(o < 0)) {
              var s = t.getParamFloat(n) != 0
              if (t.setPartsOpacity(o, s ? 1 : 0), t.setParamFloat(n, s ? 1 : 0), e[r].link != null) for (var _ = 0; _ < e[r].link.length; _++) e[r].link[_].initIndex(t)
            }
          }
        }
      }
    }, $.prototype.normalizePartsOpacityGroup = function (t, i, e) {
      for (var r = -1, o = 1, n = 0; n < i.length; n++) {
        var s = i[n].partsIndex
        var _ = i[n].paramIndex
        if (!(s < 0) && t.getParamFloat(_) != 0) {
          if (r >= 0) break
          r = n, o = t.getPartsOpacity(s), o += e / 0.5, o > 1 && (o = 1)
        }
      }
      r < 0 && (r = 0, o = 1)
      for (var n = 0; n < i.length; n++) {
        var s = i[n].partsIndex
        if (!(s < 0)) {
          if (r == n) t.setPartsOpacity(s, o)
          else {
            var a; var h = t.getPartsOpacity(s)
            a = o < 0.5 ? -0.5 * o / 0.5 + 1 : 0.5 * (1 - o) / 0.5
            var l = (1 - a) * (1 - o)
            l > 0.15 && (a = 1 - 0.15 / (1 - o)), h > a && (h = a), t.setPartsOpacity(s, h)
          }
        }
      }
    }, $.prototype.copyOpacityOtherParts = function (t, i) {
      for (var e = 0; e < i.length; e++) {
        var r = i[e]
        if (r.link != null && !(r.partsIndex < 0)) {
          for (var o = t.getPartsOpacity(r.partsIndex), n = 0; n < r.link.length; n++) {
            var s = r.link[n]
            s.partsIndex < 0 || t.setPartsOpacity(s.partsIndex, o)
          }
        }
      }
    }, u.prototype.initIndex = function (t) {
      this.paramIndex = t.getParamIndex('VISIBLE:' + this.id), this.partsIndex = t.getPartsDataIndex(PartsDataID.getID(this.id)), t.setParamFloat(this.paramIndex, 1)
    }, p.FRAME_RATE = 30, p.prototype.setPoint = function (t, i) {
      this.faceTargetX = t, this.faceTargetY = i
    }, p.prototype.getX = function () {
      return this.faceX
    }, p.prototype.getY = function () {
      return this.faceY
    }, p.prototype.update = function () {
      var t = 40 / 7.5 / p.FRAME_RATE
      if (this.lastTimeSec == 0) return void (this.lastTimeSec = UtSystem.getUserTimeMSec())
      var i = UtSystem.getUserTimeMSec()
      var e = (i - this.lastTimeSec) * p.FRAME_RATE / 1e3
      this.lastTimeSec = i
      var r = 0.15 * p.FRAME_RATE
      var o = e * t / r
      var n = this.faceTargetX - this.faceX
      var s = this.faceTargetY - this.faceY
      if (!(Math.abs(n) <= this.epsilon && math.abs(s) <="this.EPSILON))" { var _="Math.sqrt(n" * n + s s) a="t" h="t" l="a" - this.facevx $="h" this.facevy u="Math.sqrt(l" $); (u -o ||> o) && (l *= o / u, $ *= o / u, u = o), this.faceVX += l, this.faceVY += $
        var f = 0.5 * (Math.sqrt(o * o + 16 * o * _ - 8 * o * _) - o)
        var c = Math.sqrt(this.faceVX * this.faceVX + this.faceVY * this.faceVY)
        c > f && (this.faceVX *= f / c, this.faceVY *= f / c), this.faceX += this.faceVX, this.faceY += this.faceVY
      }
    }, f.prototype = new _(), f.prototype.getMaxScale = function () {
      return this.max
    }, f.prototype.getMinScale = function () {
      return this.min
    }, f.prototype.setMaxScale = function (t) {
      this.max = t
    }, f.prototype.setMinScale = function (t) {
      this.min = t
    }, f.prototype.isMaxScale = function () {
      return this.getScaleX() == this.max
    }, f.prototype.isMinScale = function () {
      return this.getScaleX() == this.min
    }, f.prototype.adjustTranslate = function (t, i) {
      this.tr[0] * this.maxLeft + (this.tr[12] + t) > this.screenLeft && (t = this.screenLeft - this.tr[0] * this.maxLeft - this.tr[12]), this.tr[0] * this.maxRight + (this.tr[12] + t) < this.screenRight && (t = this.screenRight - this.tr[0] * this.maxRight - this.tr[12]), this.tr[5] * this.maxTop + (this.tr[13] + i) < this.screenTop && (i = this.screenTop - this.tr[5] * this.maxTop - this.tr[13]), this.tr[5] * this.maxBottom + (this.tr[13] + i) > this.screenBottom && (i = this.screenBottom - this.tr[5] * this.maxBottom - this.tr[13])
      var e = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, i, 0, 1]
      _.mul(e, this.tr, this.tr)
    }, f.prototype.adjustScale = function (t, i, e) {
      var r = e * this.tr[0]
      r < this.min ? this.tr[0] > 0 && (e = this.min / this.tr[0]) : r > this.max && this.tr[0] > 0 && (e = this.max / this.tr[0])
      var o = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, i, 0, 1]
      var n = [e, 0, 0, 0, 0, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
      var s = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -t, -i, 0, 1]
      _.mul(s, this.tr, this.tr), _.mul(n, this.tr, this.tr), _.mul(o, this.tr, this.tr)
    }, f.prototype.setScreenRect = function (t, i, e, r) {
      this.screenLeft = t, this.screenRight = i, this.screenTop = r, this.screenBottom = e
    }, f.prototype.setMaxScreenRect = function (t, i, e, r) {
      this.maxLeft = t, this.maxRight = i, this.maxTop = r, this.maxBottom = e
    }, f.prototype.getScreenLeft = function () {
      return this.screenLeft
    }, f.prototype.getScreenRight = function () {
      return this.screenRight
    }, f.prototype.getScreenBottom = function () {
      return this.screenBottom
    }, f.prototype.getScreenTop = function () {
      return this.screenTop
    }, f.prototype.getMaxLeft = function () {
      return this.maxLeft
    }, f.prototype.getMaxRight = function () {
      return this.maxRight
    }, f.prototype.getMaxBottom = function () {
      return this.maxBottom
    }, f.prototype.getMaxTop = function () {
      return this.maxTop
    }, c.platformManager = null, c.getPlatformManager = function () {
      return c.platformManager
    }, c.setPlatformManager = function (t) {
      c.platformManager = t
    }, t.exports = {
      L2DTargetPoint: p,
      Live2DFramework: c,
      L2DViewMatrix: f,
      L2DPose: $,
      L2DPartsParam: u,
      L2DPhysics: l,
      L2DMotionManager: h,
      L2DModelMatrix: a,
      L2DMatrix44: _,
      EYE_STATE: g,
      L2DEyeBlink: s,
      L2DExpressionParam: n,
      L2DExpressionMotion: o,
      L2DBaseModel: r
    }
  }, function (t, i, e) {
    'use strict'
    var r = {
      DEBUG_LOG: !1,
      DEBUG_MOUSE_LOG: !1,
      DEBUG_DRAW_HIT_AREA: !1,
      DEBUG_DRAW_ALPHA_MODEL: !1,
      VIEW_MAX_SCALE: 2,
      VIEW_MIN_SCALE: 0.8,
      VIEW_LOGICAL_LEFT: -1,
      VIEW_LOGICAL_RIGHT: 1,
      VIEW_LOGICAL_MAX_LEFT: -2,
      VIEW_LOGICAL_MAX_RIGHT: 2,
      VIEW_LOGICAL_MAX_BOTTOM: -2,
      VIEW_LOGICAL_MAX_TOP: 2,
      PRIORITY_NONE: 0,
      PRIORITY_IDLE: 1,
      PRIORITY_SLEEPY: 2,
      PRIORITY_NORMAL: 3,
      PRIORITY_FORCE: 4,
      MOTION_GROUP_IDLE: 'idle',
      MOTION_GROUP_SLEEPY: 'sleepy',
      MOTION_GROUP_TAP_BODY: 'tap_body',
      MOTION_GROUP_FLICK_HEAD: 'flick_head',
      MOTION_GROUP_PINCH_IN: 'pinch_in',
      MOTION_GROUP_PINCH_OUT: 'pinch_out',
      MOTION_GROUP_SHAKE: 'shake',
      HIT_AREA_HEAD: 'head',
      HIT_AREA_BODY: 'body'
    }
    t.exports = r
  }, function (t, i, e) {
    'use strict'

    function r (t) {
      n = t
    }
    function o () {
      return n
    }
    Object.defineProperty(i, '__esModule', {
      value: !0
    }), i.setContext = r, i.getContext = o
    var n = void 0
  }, function (t, i, e) {
    'use strict'

    function r () { }
    r.matrixStack = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], r.depth = 0, r.currentMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], r.tmp = new Array(16), r.reset = function () {
      this.depth = 0
    }, r.loadIdentity = function () {
      for (var t = 0; t < 16; t++) this.currentMatrix[t] = t % 5 == 0 ? 1 : 0
    }, r.push = function () {
      var t = (this.depth, 16 * (this.depth + 1))
      this.matrixStack.length < t + 16 && (this.matrixStack.length = t + 16)
      for (var i = 0; i < 16; i++) this.matrixStack[t + i] = this.currentMatrix[i]
      this.depth++
    }, r.pop = function () {
      --this.depth < 0 && (myError('Invalid matrix stack.'), this.depth = 0)
      for (var t = 16 * this.depth, i = 0; i < 16; i++) this.currentMatrix[i] = this.matrixStack[t + i]
    }, r.getMatrix = function () {
      return this.currentMatrix
    }, r.multMatrix = function (t) {
      var i, e, r
      for (i = 0; i < 16; i++) this.tmp[i] = 0
      for (i = 0; i < 4; i++) for (e = 0; e < 4; e++) for (r = 0; r < 4; r++) this.tmp[i + 4 * e] += this.currentMatrix[i + 4 * r] * t[r + 4 * e]
      for (i = 0; i < 16; i++) this.currentMatrix[i] = this.tmp[i]
    }, t.exports = r
  }, function (t, i, e) {
    t.exports = e(5)
  }, function (t, i, e) {
    'use strict'

    function r (t) {
      return t && t.__esModule ? t : {
        default:
            t
      }
    }
    function o (t) {
      C = document.getElementById(t), C.addEventListener && (window.addEventListener('click', g), window.addEventListener('mousedown', g), window.addEventListener('mousemove', g), window.addEventListener('mouseup', g), document.addEventListener('mouseout', g), window.addEventListener('touchstart', y), window.addEventListener('touchend', y), window.addEventListener('touchmove', y))
    }
    function n (t) {
      var i = C.width
      var e = C.height
      N = new M.L2DTargetPoint()
      var r = e / i
      var o = w
        .default.VIEW_LOGICAL_LEFT
      var n = w
        .default.VIEW_LOGICAL_RIGHT
      var _ = -r
      var h = r
      if (window.Live2D.captureFrame = !1, B = new M.L2DViewMatrix(), B.setScreenRect(o, n, _, h), B.setMaxScreenRect(w
        .default.VIEW_LOGICAL_MAX_LEFT, w
        .default.VIEW_LOGICAL_MAX_RIGHT, w
        .default.VIEW_LOGICAL_MAX_BOTTOM, w
        .default.VIEW_LOGICAL_MAX_TOP), B.setMaxScale(w
        .default.VIEW_MAX_SCALE), B.setMinScale(w
        .default.VIEW_MIN_SCALE), U = new M.L2DMatrix44(), U.multScale(1, i / e), G = new M.L2DMatrix44(), G.multTranslate(-i / 2, -e / 2), G.multScale(2 / i, -2 / i), F = v(), (0, D.setContext)(F), !F) return console.error('Failed to create WebGL context.'), void (window.WebGLRenderingContext && console.error("Your browser don't support WebGL, check https://get.webgl.org/ for futher information."))
      window.Live2D.setGL(F), F.clearColor(0, 0, 0, 0), a(t), s()
    }
    function s () {
      b || (b = !0, (function t () {
        _()
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
        if (window.Live2D.captureFrame) {
          window.Live2D.captureFrame = !1
          var e = document.createElement('a')
          document.body.appendChild(e), e.setAttribute('type', 'hidden'), e.href = C.toDataURL(), e.download = window.Live2D.captureName || 'live2d.png', e.click()
        }
        i(t, C)
      }()))
    }
    function _ () {
      O
        .default.reset(), O
        .default.loadIdentity(), N.update(), R.setDrag(N.getX(), N.getY()), F.clear(F.COLOR_BUFFER_BIT), O
        .default.multMatrix(U.getArray()), O
        .default.multMatrix(B.getArray()), O
        .default.push()
      for (var t = 0; t < R.numModels(); t++) {
        var i = R.getModel(t)
        if (i == null) return
        i.initialized && !i.updating && (i.update(), i.draw(F))
      }
      O
        .default.pop()
    }
    function a (t) {
      R.reloadFlg = !0, R.count++, R.changeModel(F, t)
    }
    function h (t, i) {
      return t.x * i.x + t.y * i.y
    }
    function l (t, i) {
      var e = Math.sqrt(t * t + i * i)
      return {
        x: t / e,
        y: i / e
      }
    }
    function $ (t, i, e) {
      function r (t, i) {
        return 180 * Math.acos(h({
          x: 0,
          y: 1
        }, l(t, i))) / Math.PI
      }
      if (i.x < e.left + e.width && i.y < e.top + e.height && i.x > e.left && i.y > e.top) return i
      var o = t.x - i.x
      var n = t.y - i.y
      var s = r(o, n)
      i.x < t.x && (s = 360 - s)
      var _ = 360 - r(e.left - t.x, -1 * (e.top - t.y))
      var a = 360 - r(e.left - t.x, -1 * (e.top + e.height - t.y))
      var $ = r(e.left + e.width - t.x, -1 * (e.top - t.y))
      var u = r(e.left + e.width - t.x, -1 * (e.top + e.height - t.y))
      var p = n / o
      var f = {}
      if (s < $) {
        var c = e.top - t.y
        var d = c / p
        f = {
          y: t.y + c,
          x: t.x + d
        }
      } else if (s < u) {
        var g = e.left + e.width - t.x
        var y = g * p
        f = {
          y: t.y + y,
          x: t.x + g
        }
      } else if (s < a) {
        var m = e.top + e.height - t.y
        var T = m / p
        f = {
          y: t.y + m,
          x: t.x + T
        }
      } else if (s < _) {
        var P = t.x - e.left
        var S = P * p
        f = {
          y: t.y - S,
          x: t.x - P
        }
      } else {
        var v = e.top - t.y
        var L = v / p
        f = {
          y: t.y + v,
          x: t.x + L
        }
      }
      return f
    }
    function u (t) {
      Y = !0
      var i = C.getBoundingClientRect()
      var e = P(t.clientX - i.left)
      var r = S(t.clientY - i.top)
      var o = $({
        x: i.left + i.width / 2,
        y: i.top + i.height * X
      }, {
        x: t.clientX,
        y: t.clientY
      }, i)
      var n = m(o.x - i.left)
      var s = T(o.y - i.top)
      w
        .default.DEBUG_MOUSE_LOG && console.log('onMouseMove device( x:' + t.clientX + ' y:' + t.clientY + ' ) view( x:' + n + ' y:' + s + ')'), k = e, V = r, N.setPoint(n, s)
    }
    function p (t) {
      Y = !0
      var i = C.getBoundingClientRect()
      var e = P(t.clientX - i.left)
      var r = S(t.clientY - i.top)
      var o = $({
        x: i.left + i.width / 2,
        y: i.top + i.height * X
      }, {
        x: t.clientX,
        y: t.clientY
      }, i)
      var n = m(o.x - i.left)
      var s = T(o.y - i.top)
      w
        .default.DEBUG_MOUSE_LOG && console.log('onMouseDown device( x:' + t.clientX + ' y:' + t.clientY + ' ) view( x:' + n + ' y:' + s + ')'), k = e, V = r, R.tapEvent(n, s)
    }
    function f (t) {
      var i = C.getBoundingClientRect()
      var e = P(t.clientX - i.left)
      var r = S(t.clientY - i.top)
      var o = $({
        x: i.left + i.width / 2,
        y: i.top + i.height * X
      }, {
        x: t.clientX,
        y: t.clientY
      }, i)
      var n = m(o.x - i.left)
      var s = T(o.y - i.top)
      w
        .default.DEBUG_MOUSE_LOG && console.log('onMouseMove device( x:' + t.clientX + ' y:' + t.clientY + ' ) view( x:' + n + ' y:' + s + ')'), Y && (k = e, V = r, N.setPoint(n, s))
    }
    function c () {
      Y && (Y = !1), N.setPoint(0, 0)
    }
    function d () {
      w
        .default.DEBUG_LOG && console.log('Set Session Storage.'), GM_setValue('Sleepy', '1')
    }
    function g (t) {
      if (t.type == 'mousewheel');
      else if (t.type == 'mousedown') p(t)
      else if (t.type == 'mousemove') {
        var i = GM_getValue('Sleepy')
        i === '1' && GM_setValue('Sleepy', '0'), u(t)
      } else if (t.type == 'mouseup') {
        if ('button' in t && t.button != 0) return
      } else if (t.type == 'mouseout') {
        w
          .default.DEBUG_LOG && console.log('Mouse out Window.'), c()
        var e = GM_getValue('SleepyTimer')
        window.clearTimeout(e), e = window.setTimeout(d, 5e4), GM_setValue('SleepyTimer', e)
      }
    }
    function y (t) {
      var i = t.touches[0]
      t.type == 'touchstart' ? t.touches.length == 1 && u(i) : t.type == 'touchmove' ? f(i) : t.type == 'touchend' && c()
    }
    function m (t) {
      var i = G.transformX(t)
      return B.invertTransformX(i)
    }
    function T (t) {
      var i = G.transformY(t)
      return B.invertTransformY(i)
    }
    function P (t) {
      return G.transformX(t)
    }
    function S (t) {
      return G.transformY(t)
    }
    function v () {
      for (var t = ['webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl'], i = 0; i < t.length; i++) {
        try {
          var e = C.getContext(t[i], {
            premultipliedAlpha: !0
          })
          if (e) return e
        } catch (t) { }
      }
      return null
    }
    function L (t, i, e) {
      X = void 0 === e ? 0.5 : e, o(t), n(i)
    }
    e(6)
    var M = e(0)
    var E = e(8)
    var A = r(E)
    var I = e(1)
    var w = r(I)
    var x = e(3)
    var O = r(x)
    var D = e(2)
    var R = (window.navigator.platform.toLowerCase(), new A
      .default())
    var b = !1
    var F = null
    var C = null
    var N = null
    var B = null
    var U = null
    var G = null
    var Y = !1
    var k = 0
    var V = 0
    var X = 0.5
    window.loadlive2d = L
  }, function (t, i, e) {
    'use strict';
    (function (t) {
      !(function () {
        function i () {
          At || (this._$MT = null, this._$5S = null, this._$NP = 0, i._$42++, this._$5S = new Y(this))
        }
        function e (t) {
          if (!At) {
            this.clipContextList = new Array(), this.glcontext = t.gl, this.dp_webgl = t, this.curFrameNo = 0, this.firstError_clipInNotUpdate = !0, this.colorBuffer = 0, this.isInitGLFBFunc = !1, this.tmpBoundsOnModel = new S(), at.glContext.length > at.frameBuffers.length && (this.curFrameNo = this.getMaskRenderTexture()), this.tmpModelToViewMatrix = new R(), this.tmpMatrix2 = new R(), this.tmpMatrixForMask = new R(), this.tmpMatrixForDraw = new R(), this.CHANNEL_COLORS = new Array()
            var i = new A()
            i = new A(), i.r = 0, i.g = 0, i.b = 0, i.a = 1, this.CHANNEL_COLORS.push(i), i = new A(), i.r = 1, i.g = 0, i.b = 0, i.a = 0, this.CHANNEL_COLORS.push(i), i = new A(), i.r = 0, i.g = 1, i.b = 0, i.a = 0, this.CHANNEL_COLORS.push(i), i = new A(), i.r = 0, i.g = 0, i.b = 1, i.a = 0, this.CHANNEL_COLORS.push(i)
            for (var e = 0; e < this.CHANNEL_COLORS.length; e++) this.dp_webgl.setChannelFlagAsColor(e, this.CHANNEL_COLORS[e])
          }
        }
        function r (t, i, e) {
          this.clipIDList = new Array(), this.clipIDList = e, this.clippingMaskDrawIndexList = new Array()
          for (var r = 0; r < e.length; r++) this.clippingMaskDrawIndexList.push(i.getDrawDataIndex(e[r]))
          this.clippedDrawContextList = new Array(), this.isUsing = !0, this.layoutChannelNo = 0, this.layoutBounds = new S(), this.allClippedDrawRect = new S(), this.matrixForMask = new Float32Array(16), this.matrixForDraw = new Float32Array(16), this.owner = t
        }
        function o (t, i) {
          this._$gP = t, this.drawDataIndex = i
        }
        function n () {
          At || (this.color = null)
        }
        function s () {
          At || (this._$dP = null, this._$eo = null, this._$V0 = null, this._$dP = 1e3, this._$eo = 1e3, this._$V0 = 1, this._$a0())
        }
        function _ () { }
        function a () {
          this._$r = null, this._$0S = null
        }
        function h () {
          At || (this.x = null, this.y = null, this.width = null, this.height = null)
        }
        function l (t) {
          At || et.prototype.constructor.call(this, t)
        }
        function $ () { }
        function u (t) {
          At || et.prototype.constructor.call(this, t)
        }
        function p () {
          At || (this._$vo = null, this._$F2 = null, this._$ao = 400, this._$1S = 400, p._$42++)
        }
        function f () {
          At || (this.p1 = new c(), this.p2 = new c(), this._$Fo = 0, this._$Db = 0, this._$L2 = 0, this._$M2 = 0, this._$ks = 0, this._$9b = 0, this._$iP = 0, this._$iT = 0, this._$lL = new Array(), this._$qP = new Array(), this.setup(0.3, 0.5, 0.1))
        }
        function c () {
          this._$p = 1, this.x = 0, this.y = 0, this.vx = 0, this.vy = 0, this.ax = 0, this.ay = 0, this.fx = 0, this.fy = 0, this._$s0 = 0, this._$70 = 0, this._$7L = 0, this._$HL = 0
        }
        function d (t, i, e) {
          this._$wL = null, this.scale = null, this._$V0 = null, this._$wL = t, this.scale = i, this._$V0 = e
        }
        function g (t, i, e, r) {
          d.prototype.constructor.call(this, i, e, r), this._$tL = null, this._$tL = t
        }
        function y (t, i, e) {
          this._$wL = null, this.scale = null, this._$V0 = null, this._$wL = t, this.scale = i, this._$V0 = e
        }
        function T (t, i, e, r) {
          y.prototype.constructor.call(this, i, e, r), this._$YP = null, this._$YP = t
        }
        function P () {
          At || (this._$fL = 0, this._$gL = 0, this._$B0 = 1, this._$z0 = 1, this._$qT = 0, this.reflectX = !1, this.reflectY = !1)
        }
        function S () {
          At || (this.x = null, this.y = null, this.width = null, this.height = null)
        }
        function v () { }
        function L () {
          At || (this.x = null, this.y = null)
        }
        function M () {
          At || (this._$gP = null, this._$dr = null, this._$GS = null, this._$qb = null, this._$Lb = null, this._$mS = null, this.clipID = null, this.clipIDList = new Array())
        }
        function E () {
          At || (this._$Eb = E._$ps, this._$lT = 1, this._$C0 = 1, this._$tT = 1, this._$WL = 1, this.culling = !1, this.matrix4x4 = new Float32Array(16), this.premultipliedAlpha = !1, this.anisotropy = 0, this.clippingProcess = E.CLIPPING_PROCESS_NONE, this.clipBufPre_clipContextMask = null, this.clipBufPre_clipContextDraw = null, this.CHANNEL_COLORS = new Array())
        }
        function A () {
          At || (this.a = 1, this.r = 1, this.g = 1, this.b = 1, this.scale = 1, this._$ho = 1, this.blendMode = at.L2D_COLOR_BLEND_MODE_MULT)
        }
        function I () {
          At || (this._$kP = null, this._$dr = null, this._$Ai = !0, this._$mS = null)
        }
        function w () { }
        function x () {
          At || (this._$VP = 0, this._$wL = null, this._$GP = null, this._$8o = x._$ds, this._$2r = -1, this._$O2 = 0, this._$ri = 0)
        }
        function O () { }
        function D () {
          At || (this._$Ob = null)
        }
        function R () {
          this.m = new Float32Array(16), this.identity()
        }
        function b (t) {
          At || et.prototype.constructor.call(this, t)
        }
        function F () {
          At || (this._$7 = 1, this._$f = 0, this._$H = 0, this._$g = 1, this._$k = 0, this._$w = 0, this._$hi = STATE_IDENTITY, this._$Z = _$pS)
        }
        function C () {
          At || (s.prototype.constructor.call(this), this.motions = new Array(), this._$7r = null, this._$7r = C._$Co++, this._$D0 = 30, this._$yT = 0, this._$E = !0, this.loopFadeIn = !0, this._$AS = -1, _$a0())
        }
        function N () {
          this._$P = new Float32Array(100), this.size = 0
        }
        function B () {
          this._$4P = null, this._$I0 = null, this._$RP = null
        }
        function U () { }
        function G () { }
        function Y (t) {
          At || (this._$QT = !0, this._$co = -1, this._$qo = 0, this._$pb = new Array(Y._$is), this._$_2 = new Float32Array(Y._$is), this._$vr = new Float32Array(Y._$is), this._$Rr = new Float32Array(Y._$is), this._$Or = new Float32Array(Y._$is), this._$fs = new Float32Array(Y._$is), this._$Js = new Array(Y._$is), this._$3S = new Array(), this._$aS = new Array(), this._$Bo = null, this._$F2 = new Array(), this._$db = new Array(), this._$8b = new Array(), this._$Hr = new Array(), this._$Ws = null, this._$Vs = null, this._$Er = null, this._$Es = new Int16Array(U._$Qb), this._$ZP = new Float32Array(2 * U._$1r), this._$Ri = t, this._$b0 = Y._$HP++, this.clipManager = null, this.dp_webgl = null)
        }
        function k () { }
        function V () {
          At || (this._$12 = null, this._$bb = null, this._$_L = null, this._$jo = null, this._$iL = null, this._$0L = null, this._$Br = null, this._$Dr = null, this._$Cb = null, this._$mr = null, this._$_L = wt.STATE_FIRST, this._$Br = 4e3, this._$Dr = 100, this._$Cb = 50, this._$mr = 150, this._$jo = !0, this._$iL = 'PARAM_EYE_L_OPEN', this._$0L = 'PARAM_EYE_R_OPEN')
        }
        function X () {
          At || (E.prototype.constructor.call(this), this._$sb = new Int32Array(X._$As), this._$U2 = new Array(), this.transform = null, this.gl = null, X._$NT == null && (X._$NT = X._$9r(256), X._$vS = X._$9r(256), X._$no = X._$vb(256)))
        }
        function z () {
          At || (I.prototype.constructor.call(this), this._$GS = null, this._$Y0 = null)
        }
        function H (t) {
          _t.prototype.constructor.call(this, t), this._$8r = I._$ur, this._$Yr = null, this._$Wr = null
        }
        function W () {
          At || (M.prototype.constructor.call(this), this._$gP = null, this._$dr = null, this._$GS = null, this._$qb = null, this._$Lb = null, this._$mS = null)
        }
        function j () {
          At || (this._$NL = null, this._$3S = null, this._$aS = null, j._$42++)
        }
        function q () {
          At || (i.prototype.constructor.call(this), this._$zo = new X())
        }
        function J () {
          At || (s.prototype.constructor.call(this), this.motions = new Array(), this._$o2 = null, this._$7r = J._$Co++, this._$D0 = 30, this._$yT = 0, this._$E = !1, this.loopFadeIn = !0, this._$rr = -1, this._$eP = 0)
        }
        function Q (t, i) {
          return String.fromCharCode(t.getUint8(i))
        }
        function N () {
          this._$P = new Float32Array(100), this.size = 0
        }
        function B () {
          this._$4P = null, this._$I0 = null, this._$RP = null
        }
        function Z () {
          At || (I.prototype.constructor.call(this), this._$o = 0, this._$A = 0, this._$GS = null, this._$Eo = null)
        }
        function K (t) {
          _t.prototype.constructor.call(this, t), this._$8r = I._$ur, this._$Cr = null, this._$hr = null
        }
        function tt () {
          At || (this.visible = !0, this._$g0 = !1, this._$NL = null, this._$3S = null, this._$aS = null, tt._$42++)
        }
        function it (t) {
          this._$VS = null, this._$e0 = null, this._$e0 = t
        }
        function et (t) {
          At || (this.id = t)
        }
        function rt () { }
        function ot () {
          At || (this._$4S = null)
        }
        function nt (t, i) {
          this.canvas = t, this.context = i, this.viewport = new Array(0, 0, t.width, t.height), this._$6r = 1, this._$xP = 0, this._$3r = 1, this._$uP = 0, this._$Qo = -1, this.cacheImages = {}
        }
        function st () {
          At || (this._$TT = null, this._$LT = null, this._$FS = null, this._$wL = null)
        }
        function _t (t) {
          At || (this._$e0 = null, this._$IP = null, this._$JS = !1, this._$AT = !0, this._$e0 = t, this.totalScale = 1, this._$7s = 1, this.totalOpacity = 1)
        }
        function at () { }
        function ht () { }
        function lt (t) {
          At || (this._$ib = t)
        }
        function $t () {
          At || (W.prototype.constructor.call(this), this._$LP = -1, this._$d0 = 0, this._$Yo = 0, this._$JP = null, this._$5P = null, this._$BP = null, this._$Eo = null, this._$Qi = null, this._$6s = $t._$ms, this.culling = !0, this.gl_cacheImage = null, this.instanceNo = $t._$42++)
        }
        function ut (t) {
          Mt.prototype.constructor.call(this, t), this._$8r = W._$ur, this._$Cr = null, this._$hr = null
        }
        function pt () {
          At || (this.x = null, this.y = null)
        }
        function ft (t) {
          At || (i.prototype.constructor.call(this), this.drawParamWebGL = new mt(t), this.drawParamWebGL.setGL(at.getGL(t)))
        }
        function ct () {
          At || (this.motions = null, this._$eb = !1, this.motions = new Array())
        }
        function dt () {
          this._$w0 = null, this._$AT = !0, this._$9L = !1, this._$z2 = -1, this._$bs = -1, this._$Do = -1, this._$sr = null, this._$sr = dt._$Gs++
        }
        function gt () {
          this.m = new Array(1, 0, 0, 0, 1, 0, 0, 0, 1)
        }
        function yt (t) {
          At || et.prototype.constructor.call(this, t)
        }
        function mt (t) {
          At || (E.prototype.constructor.call(this), this.textures = new Array(), this.transform = null, this.gl = null, this.glno = t, this.firstDraw = !0, this.anisotropyExt = null, this.maxAnisotropy = 0, this._$As = 32, this._$Gr = !1, this._$NT = null, this._$vS = null, this._$no = null, this.vertShader = null, this.fragShader = null, this.vertShaderOff = null, this.fragShaderOff = null)
        }
        function Tt (t, i, e) {
          return i == null && (i = t.createBuffer()), t.bindBuffer(t.ARRAY_BUFFER, i), t.bufferData(t.ARRAY_BUFFER, e, t.DYNAMIC_DRAW), i
        }
        function Pt (t, i, e) {
          return i == null && (i = t.createBuffer()), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, i), t.bufferData(t.ELEMENT_ARRAY_BUFFER, e, t.DYNAMIC_DRAW), i
        }
        function St (t) {
          At || (this._$P = new Int8Array(8), this._$R0 = new DataView(this._$P.buffer), this._$3i = new Int8Array(1e3), this._$hL = 0, this._$v0 = 0, this._$S2 = 0, this._$Ko = new Array(), this._$T = t, this._$F = 0)
        }
        function vt () { }
        function Lt () { }
        function Mt (t) {
          At || (this._$e0 = null, this._$IP = null, this._$Us = null, this._$7s = null, this._$IS = [!1], this._$VS = null, this._$AT = !0, this.baseOpacity = 1, this.clipBufPre_clipContext = null, this._$e0 = t)
        }
        function Et () { }
        var At = !0
        i._$0s = 1, i._$4s = 2, i._$42 = 0, i._$62 = function (t, e) {
          try {
            if (e instanceof ArrayBuffer && (e = new DataView(e)), !(e instanceof DataView)) throw new lt('_$SS#loadModel(b) / b _$x be DataView or ArrayBuffer')
            var r; var o = new St(e)
            var n = o._$ST()
            var s = o._$ST()
            var a = o._$ST()
            if (n != 109 || s != 111 || a != 99) throw new lt('_$gi _$C _$li , _$Q0 _$P0.')
            if (r = o._$ST(), o._$gr(r), r > G._$T7) {
              t._$NP |= i._$4s
              throw new lt('_$gi _$C _$li , _$n0 _$_ version _$li ( SDK : ' + G._$T7 + ' < _$f0 : ' + r + ' )@_$SS#loadModel()\n')
            }
            var h = o._$nP()
            if (r >= G._$s7) {
              var l = o._$9T()
              var $ = o._$9T()
              if (l != -30584 || $ != -30584) throw t._$NP |= i._$0s, new lt('_$gi _$C _$li , _$0 _$6 _$Ui.')
            }
            t._$KS(h)
            var u = t.getModelContext()
            u.setDrawParam(t.getDrawParam()), u.init()
          } catch (t) {
            _._$Rb(t)
          }
        }, i.prototype._$KS = function (t) {
          this._$MT = t
        }, i.prototype.getModelImpl = function () {
          return this._$MT == null && (this._$MT = new p(), this._$MT._$zP()), this._$MT
        }, i.prototype.getCanvasWidth = function () {
          return this._$MT == null ? 0 : this._$MT.getCanvasWidth()
        }, i.prototype.getCanvasHeight = function () {
          return this._$MT == null ? 0 : this._$MT.getCanvasHeight()
        }, i.prototype.getParamFloat = function (t) {
          return typeof t !== 'number' && (t = this._$5S.getParamIndex(u.getID(t))), this._$5S.getParamFloat(t)
        }, i.prototype.setParamFloat = function (t, i, e) {
          typeof t !== 'number' && (t = this._$5S.getParamIndex(u.getID(t))), arguments.length < 3 && (e = 1), this._$5S.setParamFloat(t, this._$5S.getParamFloat(t) * (1 - e) + i * e)
        }, i.prototype.addToParamFloat = function (t, i, e) {
          typeof t !== 'number' && (t = this._$5S.getParamIndex(u.getID(t))), arguments.length < 3 && (e = 1), this._$5S.setParamFloat(t, this._$5S.getParamFloat(t) + i * e)
        }, i.prototype.multParamFloat = function (t, i, e) {
          typeof t !== 'number' && (t = this._$5S.getParamIndex(u.getID(t))), arguments.length < 3 && (e = 1), this._$5S.setParamFloat(t, this._$5S.getParamFloat(t) * (1 + (i - 1) * e))
        }, i.prototype.getParamIndex = function (t) {
          return this._$5S.getParamIndex(u.getID(t))
        }, i.prototype.loadParam = function () {
          this._$5S.loadParam()
        }, i.prototype.saveParam = function () {
          this._$5S.saveParam()
        }, i.prototype.init = function () {
          this._$5S.init()
        }, i.prototype.update = function () {
          this._$5S.update()
        }, i.prototype._$Rs = function () {
          return _._$li('_$60 _$PT _$Rs()'), -1
        }, i.prototype._$Ds = function (t) {
          _._$li('_$60 _$PT _$SS#_$Ds() \n')
        }, i.prototype._$K2 = function () { }, i.prototype.draw = function () { }, i.prototype.getModelContext = function () {
          return this._$5S
        }, i.prototype._$s2 = function () {
          return this._$NP
        }, i.prototype._$P7 = function (t, i, e, r) {
          var o = -1
          var n = 0
          var s = this
          if (e != 0) {
            if (t.length == 1) {
              var _ = t[0]
              var a = s.getParamFloat(_) != 0
              var h = i[0]
              var l = s.getPartsOpacity(h)
              var $ = e / r
              a ? (l += $) > 1 && (l = 1) : (l -= $) < 0 && (l = 0), s.setPartsOpacity(h, l)
            } else {
              for (var u = 0; u < t.length; u++) {
                var _ = t[u]
                var p = s.getParamFloat(_) != 0
                if (p) {
                  if (o >= 0) break
                  o = u
                  var h = i[u]
                  n = s.getPartsOpacity(h), n += e / r, n > 1 && (n = 1)
                }
              }
              o < 0 && (console.log('No _$wi _$q0/ _$U default[%s]', t[0]), o = 0, n = 1, s.loadParam(), s.setParamFloat(t[o], n), s.saveParam())
              for (var u = 0; u < t.length; u++) {
                var h = i[u]
                if (o == u) s.setPartsOpacity(h, n)
                else {
                  var f; var c = s.getPartsOpacity(h)
                  f = n < 0.5 ? -0.5 * n / 0.5 + 1 : 0.5 * (1 - n) / 0.5
                  var d = (1 - f) * (1 - n)
                  d > 0.15 && (f = 1 - 0.15 / (1 - n)), c > f && (c = f), s.setPartsOpacity(h, c)
                }
              }
            }
          } else {
            for (var u = 0; u < t.length; u++) {
              var _ = t[u]
              var h = i[u]
              var p = s.getParamFloat(_) != 0
              s.setPartsOpacity(h, p ? 1 : 0)
            }
          }
        }, i.prototype.setPartsOpacity = function (t, i) {
          typeof t !== 'number' && (t = this._$5S.getPartsDataIndex(l.getID(t))), this._$5S.setPartsOpacity(t, i)
        }, i.prototype.getPartsDataIndex = function (t) {
          return t instanceof l || (t = l.getID(t)), this._$5S.getPartsDataIndex(t)
        }, i.prototype.getPartsOpacity = function (t) {
          return typeof t !== 'number' && (t = this._$5S.getPartsDataIndex(l.getID(t))), t < 0 ? 0 : this._$5S.getPartsOpacity(t)
        }, i.prototype.getDrawParam = function () { }, i.prototype.getDrawDataIndex = function (t) {
          return this._$5S.getDrawDataIndex(b.getID(t))
        }, i.prototype.getDrawData = function (t) {
          return this._$5S.getDrawData(t)
        }, i.prototype.getTransformedPoints = function (t) {
          var i = this._$5S._$C2(t)
          return i instanceof ut ? i.getTransformedPoints() : null
        }, i.prototype.getIndexArray = function (t) {
          if (t < 0 || t >= this._$5S._$aS.length) return null
          var i = this._$5S._$aS[t]
          return i != null && i.getType() == W._$wb && i instanceof $t ? i.getIndexArray() : null
        }, e.CHANNEL_COUNT = 4, e.RENDER_TEXTURE_USE_MIPMAP = !1, e.NOT_USED_FRAME = -100, e.prototype._$L7 = function () {
          if (this.tmpModelToViewMatrix && (this.tmpModelToViewMatrix = null), this.tmpMatrix2 && (this.tmpMatrix2 = null), this.tmpMatrixForMask && (this.tmpMatrixForMask = null), this.tmpMatrixForDraw && (this.tmpMatrixForDraw = null), this.tmpBoundsOnModel && (this.tmpBoundsOnModel = null), this.CHANNEL_COLORS) {
            for (var t = this.CHANNEL_COLORS.length - 1; t >= 0; --t) this.CHANNEL_COLORS.splice(t, 1)
            this.CHANNEL_COLORS = []
          }
          this.releaseShader()
        }, e.prototype.releaseShader = function () {
          for (var t = at.frameBuffers.length, i = 0; i < t; i++) this.gl.deleteFramebuffer(at.frameBuffers[i].framebuffer)
          at.frameBuffers = [], at.glContext = []
        }, e.prototype.init = function (t, i, e) {
          for (var o = 0; o < i.length; o++) {
            var n = i[o].getClipIDList()
            if (n != null) {
              var s = this.findSameClip(n)
              s == null && (s = new r(this, t, n), this.clipContextList.push(s))
              var _ = i[o].getDrawDataID()
              var a = t.getDrawDataIndex(_)
              s.addClippedDrawData(_, a)
              e[o].clipBufPre_clipContext = s
            }
          }
        }, e.prototype.getMaskRenderTexture = function () {
          var t = null
          return t = this.dp_webgl.createFramebuffer(), at.frameBuffers[this.dp_webgl.glno] = t, this.dp_webgl.glno
        }, e.prototype.setupClip = function (t, i) {
          for (var e = 0, r = 0; r < this.clipContextList.length; r++) {
            var o = this.clipContextList[r]
            this.calcClippedDrawTotalBounds(t, o), o.isUsing && e++
          }
          if (e > 0) {
            var n = i.gl.getParameter(i.gl.FRAMEBUFFER_BINDING)
            var s = new Array(4)
            s[0] = 0, s[1] = 0, s[2] = i.gl.canvas.width, s[3] = i.gl.canvas.height, i.gl.viewport(0, 0, at.clippingMaskBufferSize, at.clippingMaskBufferSize), this.setupLayoutBounds(e), i.gl.bindFramebuffer(i.gl.FRAMEBUFFER, at.frameBuffers[this.curFrameNo].framebuffer), i.gl.clearColor(0, 0, 0, 0), i.gl.clear(i.gl.COLOR_BUFFER_BIT)
            for (var r = 0; r < this.clipContextList.length; r++) {
              var o = this.clipContextList[r]
              var _ = o.allClippedDrawRect
              var a = (o.layoutChannelNo, o.layoutBounds)
              this.tmpBoundsOnModel._$jL(_), this.tmpBoundsOnModel.expand(0.05 * _.width, 0.05 * _.height)
              var h = a.width / this.tmpBoundsOnModel.width
              var l = a.height / this.tmpBoundsOnModel.height
              this.tmpMatrix2.identity(), this.tmpMatrix2.translate(-1, -1, 0), this.tmpMatrix2.scale(2, 2, 1), this.tmpMatrix2.translate(a.x, a.y, 0), this.tmpMatrix2.scale(h, l, 1), this.tmpMatrix2.translate(-this.tmpBoundsOnModel.x, -this.tmpBoundsOnModel.y, 0), this.tmpMatrixForMask.setMatrix(this.tmpMatrix2.m), this.tmpMatrix2.identity(), this.tmpMatrix2.translate(a.x, a.y, 0), this.tmpMatrix2.scale(h, l, 1), this.tmpMatrix2.translate(-this.tmpBoundsOnModel.x, -this.tmpBoundsOnModel.y, 0), this.tmpMatrixForDraw.setMatrix(this.tmpMatrix2.m)
              for (var $ = this.tmpMatrixForMask.getArray(), u = 0; u < 16; u++) o.matrixForMask[u] = $[u]
              for (var p = this.tmpMatrixForDraw.getArray(), u = 0; u < 16; u++) o.matrixForDraw[u] = p[u]
              for (var f = o.clippingMaskDrawIndexList.length, c = 0; c < f; c++) {
                var d = o.clippingMaskDrawIndexList[c]
                var g = t.getDrawData(d)
                var y = t._$C2(d)
                i.setClipBufPre_clipContextForMask(o), g.draw(i, t, y)
              }
            }
            i.gl.bindFramebuffer(i.gl.FRAMEBUFFER, n), i.setClipBufPre_clipContextForMask(null), i.gl.viewport(s[0], s[1], s[2], s[3])
          }
        }, e.prototype.getColorBuffer = function () {
          return this.colorBuffer
        }, e.prototype.findSameClip = function (t) {
          for (var i = 0; i < this.clipContextList.length; i++) {
            var e = this.clipContextList[i]
            var r = e.clipIDList.length
            if (r == t.length) {
              for (var o = 0, n = 0; n < r; n++) {
                for (var s = e.clipIDList[n], _ = 0; _ < r; _++) {
                  if (t[_] == s) {
                    o++
                    break
                  }
                }
              }
              if (o == r) return e
            }
          }
          return null
        }, e.prototype.calcClippedDrawTotalBounds = function (t, i) {
          for (var e = t._$Ri.getModelImpl().getCanvasWidth(), r = t._$Ri.getModelImpl().getCanvasHeight(), o = e > r ? e : r, n = o, s = o, _ = 0, a = 0, h = i.clippedDrawContextList.length, l = 0; l < h; l++) {
            var $ = i.clippedDrawContextList[l]
            var u = $.drawDataIndex
            var p = t._$C2(u)
            if (p._$yo()) {
              for (var f = p.getTransformedPoints(), c = f.length, d = [], g = [], y = 0, m = U._$i2; m < c; m += U._$No) d[y] = f[m], g[y] = f[m + 1], y++
              var T = Math.min.apply(null, d)
              var P = Math.min.apply(null, g)
              var S = Math.max.apply(null, d)
              var v = Math.max.apply(null, g)
              T < n && (n = T), P < s && (s = P), S > _ && (_ = S), v > a && (a = v)
            }
          }
          if (n == o) i.allClippedDrawRect.x = 0, i.allClippedDrawRect.y = 0, i.allClippedDrawRect.width = 0, i.allClippedDrawRect.height = 0, i.isUsing = !1
          else {
            var L = _ - n
            var M = a - s
            i.allClippedDrawRect.x = n, i.allClippedDrawRect.y = s, i.allClippedDrawRect.width = L, i.allClippedDrawRect.height = M, i.isUsing = !0
          }
        }, e.prototype.setupLayoutBounds = function (t) {
          var i = t / e.CHANNEL_COUNT
          var r = t % e.CHANNEL_COUNT
          i = ~~i, r = ~~r
          for (var o = 0, n = 0; n < e.CHANNEL_COUNT; n++) {
            var s = i + (n < r ? 1 : 0)
            if (s == 0);
            else if (s == 1) {
              var a = this.clipContextList[o++]
              a.layoutChannelNo = n, a.layoutBounds.x = 0, a.layoutBounds.y = 0, a.layoutBounds.width = 1, a.layoutBounds.height = 1
            } else if (s == 2) {
              for (var h = 0; h < s; h++) {
                var l = h % 2
                var $ = 0
                l = ~~l
                var a = this.clipContextList[o++]
                a.layoutChannelNo = n, a.layoutBounds.x = 0.5 * l, a.layoutBounds.y = 0, a.layoutBounds.width = 0.5, a.layoutBounds.height = 1
              }
            } else if (s <= 0 1 2 3 6 4) { for (var h="0;" < s; h++) var l="h" % $="h" a="this.clipContextList[o++]" a.layoutchannelno="n," a.layoutbounds.x="0.5" * l, a.layoutbounds.y="0.5" $, a.layoutbounds.width="0.5," a.layoutbounds.height="0.5" } else if (s 3, _._$li('_$6 _$0p mask count : %d', s) }, r.prototype.addclippeddrawdata="function" (t, i) e="new" o(t, this.clippeddrawcontextlist.push(e) s._$jt="function" i, e) r="t" i o="e" n="o" s="1" - (1 o) _="1" n) + (n (2 3) n)) (o o)) _) u="3" (r return>= 1) return 1
          var p = r
          var f = p * p
          return l * (p * f) + $ * f + u * p + 0
        }, s.prototype._$a0 = function () { }, s.prototype.setFadeIn = function (t) {
          this._$dP = t
        }, s.prototype.setFadeOut = function (t) {
          this._$eo = t
        }, s.prototype._$pT = function (t) {
          this._$V0 = t
        }, s.prototype.getFadeOut = function () {
          return this._$eo
        }, s.prototype._$4T = function () {
          return this._$eo
        }, s.prototype._$mT = function () {
          return this._$V0
        }, s.prototype.getDurationMSec = function () {
          return -1
        }, s.prototype.getLoopDurationMSec = function () {
          return -1
        }, s.prototype.updateParam = function (t, i) {
          if (i._$AT && !i._$9L) {
            var e = w.getUserTimeMSec()
            if (i._$z2 < 0) {
              i._$z2 = e, i._$bs = e
              var r = this.getDurationMSec()
              i._$Do < 0 && (i._$Do = r <= 0 1 ? -1 : i._$z2 + r) } var o="this._$V0" * (this._$dp="=" ht._$r2((e - i._$bs) this._$dp)) (this._$eo="=" || i._$do < ht._$r2((i._$do e) this._$eo)),>= 0 && o <= 1 || console.log('### assert!! ### '), this.updateparamexe(t, e, o, i), i._$do> 0 && i._$Do < e && (i._$9L = !0)
          }
        }, s.prototype.updateParamExe = function (t, i, e, r) { }, _._$8s = 0, _._$fT = new Object(), _.start = function (t) {
          var i = _._$fT[t]
          i == null && (i = new a(), i._$r = t, _._$fT[t] = i), i._$0S = w.getSystemTimeMSec()
        }, _.dump = function (t) {
          var i = _._$fT[t]
          if (i != null) {
            var e = w.getSystemTimeMSec()
            var r = e - i._$0S
            return console.log(t + ' : ' + r + 'ms'), r
          }
          return -1
        }, _.end = function (t) {
          var i = _._$fT[t]
          if (i != null) {
            return w.getSystemTimeMSec() - i._$0S
          }
          return -1
        }, _._$li = function (t, i) {
          console.log('_$li : ' + t + '\n', i)
        }, _._$Ji = function (t, i) {
          console.log(t, i)
        }, _._$dL = function (t, i) {
          console.log(t, i), console.log('\n')
        }, _._$KL = function (t, i) {
          for (var e = 0; e < i; e++) e % 16 == 0 && e > 0 ? console.log('\n') : e % 8 == 0 && e > 0 && console.log('  '), console.log('%02X ', 255 & t[e])
          console.log('\n')
        }, _._$nr = function (t, i, e) {
          console.log('%s\n', t)
          for (var r = i.length, o = 0; o < r; ++o) console.log('%5d', i[o]), console.log('%s\n', e), console.log(',')
          console.log('\n')
        }, _._$Rb = function (t) {
          console.log('dump exception : ' + t), console.log('stack :: ' + t.stack)
        }, h.prototype._$8P = function () {
          return 0.5 * (this.x + this.x + this.width)
        }, h.prototype._$6P = function () {
          return 0.5 * (this.y + this.y + this.height)
        }, h.prototype._$EL = function () {
          return this.x + this.width
        }, h.prototype._$5T = function () {
          return this.y + this.height
        }, h.prototype._$jL = function (t, i, e, r) {
          this.x = t, this.y = i, this.width = e, this.height = r
        }, h.prototype._$jL = function (t) {
          this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
        }, l.prototype = new et(), l._$tP = new Object(), l._$27 = function () {
          l._$tP.clear()
        }, l.getID = function (t) {
          var i = l._$tP[t]
          return i == null && (i = new l(t), l._$tP[t] = i), i
        }, l.prototype._$3s = function () {
          return new l()
        }, u.prototype = new et(), u._$tP = new Object(), u._$27 = function () {
          u._$tP.clear()
        }, u.getID = function (t) {
          var i = u._$tP[t]
          return i == null && (i = new u(t), u._$tP[t] = i), i
        }, u.prototype._$3s = function () {
          return new u()
        }, p._$42 = 0, p.prototype._$zP = function () {
          this._$vo == null && (this._$vo = new ot()), this._$F2 == null && (this._$F2 = new Array())
        }, p.prototype.getCanvasWidth = function () {
          return this._$ao
        }, p.prototype.getCanvasHeight = function () {
          return this._$1S
        }, p.prototype._$F0 = function (t) {
          this._$vo = t._$nP(), this._$F2 = t._$nP(), this._$ao = t._$6L(), this._$1S = t._$6L()
        }, p.prototype._$6S = function (t) {
          this._$F2.push(t)
        }, p.prototype._$Xr = function () {
          return this._$F2
        }, p.prototype._$E2 = function () {
          return this._$vo
        }, f.prototype.setup = function (t, i, e) {
          this._$ks = this._$Yb(), this.p2._$xT(), arguments.length == 3 && (this._$Fo = t, this._$L2 = i, this.p1._$p = e, this.p2._$p = e, this.p2.y = t, this.setup())
        }, f.prototype.getPhysicsPoint1 = function () {
          return this.p1
        }, f.prototype.getPhysicsPoint2 = function () {
          return this.p2
        }, f.prototype._$qr = function () {
          return this._$Db
        }, f.prototype._$pr = function (t) {
          this._$Db = t
        }, f.prototype._$5r = function () {
          return this._$M2
        }, f.prototype._$Cs = function () {
          return this._$9b
        }, f.prototype._$Yb = function () {
          return -180 * Math.atan2(this.p1.x - this.p2.x, -(this.p1.y - this.p2.y)) / Math.PI
        }, f.prototype.addSrcParam = function (t, i, e, r) {
          var o = new g(t, i, e, r)
          this._$lL.push(o)
        }, f.prototype.addTargetParam = function (t, i, e, r) {
          var o = new T(t, i, e, r)
          this._$qP.push(o)
        }, f.prototype.update = function (t, i) {
          if (this._$iP == 0) return this._$iP = this._$iT = i, void (this._$Fo = Math.sqrt((this.p1.x - this.p2.x) * (this.p1.x - this.p2.x) + (this.p1.y - this.p2.y) * (this.p1.y - this.p2.y)))
          var e = (i - this._$iT) / 1e3
          if (e != 0) {
            for (var r = this._$lL.length - 1; r >= 0; --r) {
              this._$lL[r]._$oP(t, this)
            }
            this._$oo(t, e), this._$M2 = this._$Yb(), this._$9b = (this._$M2 - this._$ks) / e, this._$ks = this._$M2
          }
          for (var r = this._$qP.length - 1; r >= 0; --r) {
            this._$qP[r]._$YS(t, this)
          }
          this._$iT = i
        }, f.prototype._$oo = function (t, i) {
          i < 0.033 && (i = 0.033)
          var e = 1 / i
          this.p1.vx = (this.p1.x - this.p1._$s0) * e, this.p1.vy = (this.p1.y - this.p1._$70) * e, this.p1.ax = (this.p1.vx - this.p1._$7L) * e, this.p1.ay = (this.p1.vy - this.p1._$HL) * e, this.p1.fx = this.p1.ax * this.p1._$p, this.p1.fy = this.p1.ay * this.p1._$p, this.p1._$xT()
          var r; var o; var n = -Math.atan2(this.p1.y - this.p2.y, this.p1.x - this.p2.x)
          var s = Math.cos(n)
          var _ = Math.sin(n)
          var a = 9.8 * this.p2._$p
          var h = this._$Db * Lt._$bS
          var l = a * Math.cos(n - h)
          r = l * _, o = l * s
          var $ = -this.p1.fx * _ * _
          var u = -this.p1.fy * _ * s
          var p = -this.p2.vx * this._$L2
          var f = -this.p2.vy * this._$L2
          this.p2.fx = r + $ + p, this.p2.fy = o + u + f, this.p2.ax = this.p2.fx / this.p2._$p, this.p2.ay = this.p2.fy / this.p2._$p, this.p2.vx += this.p2.ax * i, this.p2.vy += this.p2.ay * i, this.p2.x += this.p2.vx * i, this.p2.y += this.p2.vy * i
          var c = Math.sqrt((this.p1.x - this.p2.x) * (this.p1.x - this.p2.x) + (this.p1.y - this.p2.y) * (this.p1.y - this.p2.y))
          this.p2.x = this.p1.x + this._$Fo * (this.p2.x - this.p1.x) / c, this.p2.y = this.p1.y + this._$Fo * (this.p2.y - this.p1.y) / c, this.p2.vx = (this.p2.x - this.p2._$s0) * e, this.p2.vy = (this.p2.y - this.p2._$70) * e, this.p2._$xT()
        }, c.prototype._$xT = function () {
          this._$s0 = this.x, this._$70 = this.y, this._$7L = this.vx, this._$HL = this.vy
        }, d.prototype._$oP = function (t, i) { }, g.prototype = new d(), g.prototype._$oP = function (t, i) {
          var e = this.scale * t.getParamFloat(this._$wL)
          var r = i.getPhysicsPoint1()
          switch (this._$tL) {
            default:
            case f.Src.SRC_TO_X:
              r.x = r.x + (e - r.x) * this._$V0
              break
            case f.Src.SRC_TO_Y:
              r.y = r.y + (e - r.y) * this._$V0
              break
            case f.Src.SRC_TO_G_ANGLE:
              var o = i._$qr()
              o += (e - o) * this._$V0, i._$pr(o)
          }
        }, y.prototype._$YS = function (t, i) { }, T.prototype = new y(), T.prototype._$YS = function (t, i) {
          switch (this._$YP) {
            default:
            case f.Target.TARGET_FROM_ANGLE:
              t.setParamFloat(this._$wL, this.scale * i._$5r(), this._$V0)
              break
            case f.Target.TARGET_FROM_ANGLE_V:
              t.setParamFloat(this._$wL, this.scale * i._$Cs(), this._$V0)
          }
        }, f.Src = function () { }, f.Src.SRC_TO_X = 'SRC_TO_X', f.Src.SRC_TO_Y = 'SRC_TO_Y', f.Src.SRC_TO_G_ANGLE = 'SRC_TO_G_ANGLE', f.Target = function () { }, f.Target.TARGET_FROM_ANGLE = 'TARGET_FROM_ANGLE', f.Target.TARGET_FROM_ANGLE_V = 'TARGET_FROM_ANGLE_V', P.prototype.init = function (t) {
          this._$fL = t._$fL, this._$gL = t._$gL, this._$B0 = t._$B0, this._$z0 = t._$z0, this._$qT = t._$qT, this.reflectX = t.reflectX, this.reflectY = t.reflectY
        }, P.prototype._$F0 = function (t) {
          this._$fL = t._$_T(), this._$gL = t._$_T(), this._$B0 = t._$_T(), this._$z0 = t._$_T(), this._$qT = t._$_T(), t.getFormatVersion() >= G.LIVE2D_FORMAT_VERSION_V2_10_SDK2 && (this.reflectX = t._$po(), this.reflectY = t._$po())
        }, P.prototype._$e = function () { }
        var It = function () { }
        It._$ni = function (t, i, e, r, o, n, s, _, a) {
          var h = s * n - _ * o
          if (h == 0) return null
          var l; var $ = ((t - e) * n - (i - r) * o) / h
          return l = o != 0 ? (t - e - $ * s) / o : (i - r - $ * _) / n, isNaN(l) && (l = (t - e - $ * s) / o, isNaN(l) && (l = (i - r - $ * _) / n), isNaN(l) && (console.log('a is NaN @UtVector#_$ni() '), console.log('v1x : ' + o), console.log('v1x != 0 ? ' + (o != 0)))), a == null ? new Array(l, $) : (a[0] = l, a[1] = $, a)
        }, S.prototype._$8P = function () {
          return this.x + 0.5 * this.width
        }, S.prototype._$6P = function () {
          return this.y + 0.5 * this.height
        }, S.prototype._$EL = function () {
          return this.x + this.width
        }, S.prototype._$5T = function () {
          return this.y + this.height
        }, S.prototype._$jL = function (t, i, e, r) {
          this.x = t, this.y = i, this.width = e, this.height = r
        }, S.prototype._$jL = function (t) {
          this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
        }, S.prototype.contains = function (t, i) {
          return this.x <= 0 1 2="=" this.x && this.y <="this.y" + this.width this.height }, s.prototype.expand="function" (t, i) { -="t," * t, i v._$z2="function" i, e, r) var o="i._$Q2(t," e) n="t._$vs()" s="t._$Tr()" if (i._$zr(n, s, o), return r[n[0]] (o="=" 1) _="r[n[0]]" a="r[n[1]]" h="s[0]" (a _) | } 2) l="r[n[2]]" $="r[n[3]]" u="s[1]" p="_" f="l" ($ l) (f p) 3) c="r[n[0]]" d="r[n[1]]" g="r[n[2]]" y="r[n[3]]" m="r[n[4]]" t="r[n[5]]" v="s[2]" (d c) (y g) (t m) (s 4) e="r[n[2]]" w="r[n[5]]" x="r[n[6]]" r="r[n[9]]" b="r[n[10]]" (m (w x) (r d) b) (n (u for (var << o, k="new" float32array(y), y; v++) z="1," o; h++) % ? s[h] : s[h], = k[v]="z" j="0;" j++) w[j]="r[n[j]]" q="0," 0.5 v._$br="function" (1 u) (_ h) (l ((1 (p (c h)) (g (v s) (e (i h))) (x (b float32array(u), u; y++) x++) s[x] s[x], g[y]="V" z[h]="r[n[H]]" v._$vr="function" r, n, i._$zr(h, l, a) 0) w._$jt(f, 0, $) else $;) n[u]="f[c++]," n[u 1]="f[c++]," g, d[c] ++c, p, y, f[c] m[c] t[c], c, a[c] i[c] x[c] o[c] r[c] b[c] f[c], tt="o[h[8]]," it="o[h[9]]," et="o[h[10]]," rt="o[h[11]]," ot="o[h[12]]," nt="o[h[13]]," st="o[h[14]]," _t="o[h[15]]," at="l[3]," ht="1" at, lt="ht" $t="ht" ut="ht" pt="ht" ft="ht" ct="ht" dt="ht" gt="ht" yt="at" mt="at" vt="at" h[c] w[c] j[c] q[c] z[c] k[c] tt[c] it[c] et[c] rt[c] ot[c] nt[c] st[c] _t[c], a, float32array(et), et; it++) wt="It," xt="1," a; ot++) l[ot] l[ot], at[it]="xt" rt++) dt[rt]="o[h[Rt]]" bt="0," 1, dt[rt][c], dt[rt][ct] l.prototype._$ht="function" (t) m._$ur="-2," m._$es="500," m._$wb="2," m._$8s="3," m._$52="M._$ES," m._$r2="M._$ES," m._$or="function" () m._$pr="function" m.prototype.convertclipidforv2_11="function" null t.length="=" , .test(t) (i.push(t.id), m.prototype._$f0="function" this._$gp="t._$nP()," this._$dr="t._$nP()," this._$gs="t._$nP()," this._$qb="t._$6L()," this._$lb="t._$cS()," this._$ms="t._$Tb()," t.getformatversion()>= G._$T7 ? (this.clipID = t._$nP(), this.clipIDList = this.convertClipIDForV2_11(this.clipID)) : this.clipIDList = [], this._$MS(this._$Lb)
        }, M.prototype.getClipIDList = function () {
          return this.clipIDList
        }, M.prototype.init = function (t) { }, M.prototype._$Nr = function (t, i) {
          if (i._$IS[0] = !1, i._$Us = v._$Z2(t, this._$GS, i._$IS, this._$Lb), at._$Zs);
          else if (i._$IS[0]) return
          i._$7s = v._$br(t, this._$GS, i._$IS, this._$mS)
        }, M.prototype._$2b = function (t, i) { }, M.prototype.getDrawDataID = function () {
          return this._$gP
        }, M.prototype._$j2 = function (t) {
          this._$gP = t
        }, M.prototype.getOpacity = function (t, i) {
          return i._$7s
        }, M.prototype._$zS = function (t, i) {
          return i._$Us
        }, M.prototype._$MS = function (t) {
          for (var i = t.length - 1; i >= 0; --i) {
            var e = t[i]
            e < M._$52 ? M._$52 = e : e > M._$R2 && (M._$R2 = e)
          }
        }, M.prototype.getTargetBaseDataID = function () {
          return this._$dr
        }, M.prototype._$gs = function (t) {
          this._$dr = t
        }, M.prototype._$32 = function () {
          return this._$dr != null && this._$dr != yt._$2o()
        }, M.prototype.preDraw = function (t, i, e) { }, M.prototype.draw = function (t, i, e) { }, M.prototype.getType = function () { }, M.prototype._$B2 = function (t, i, e) { }, E._$ps = 32, E.CLIPPING_PROCESS_NONE = 0, E.CLIPPING_PROCESS_OVERWRITE_ALPHA = 1, E.CLIPPING_PROCESS_MULTIPLY_ALPHA = 2, E.CLIPPING_PROCESS_DRAW = 3, E.CLIPPING_PROCESS_CLEAR_ALPHA = 4, E.prototype.setChannelFlagAsColor = function (t, i) {
          this.CHANNEL_COLORS[t] = i
        }, E.prototype.getChannelFlagAsColor = function (t) {
          return this.CHANNEL_COLORS[t]
        }, E.prototype._$ZT = function () { }, E.prototype._$Uo = function (t, i, e, r, o, n, s) { }, E.prototype._$Rs = function () {
          return -1
        }, E.prototype._$Ds = function (t) { }, E.prototype.setBaseColor = function (t, i, e, r) {
          t < 0 ? t = 0 : t > 1 && (t = 1), i < 0 ? i = 0 : i > 1 && (i = 1), e < 0 ? e = 0 : e > 1 && (e = 1), r < 0 ? r = 0 : r > 1 && (r = 1), this._$lT = t, this._$C0 = i, this._$tT = e, this._$WL = r
        }, E.prototype._$WP = function (t) {
          this.culling = t
        }, E.prototype.setMatrix = function (t) {
          for (var i = 0; i < 16; i++) this.matrix4x4[i] = t[i]
        }, E.prototype._$IT = function () {
          return this.matrix4x4
        }, E.prototype.setPremultipliedAlpha = function (t) {
          this.premultipliedAlpha = t
        }, E.prototype.isPremultipliedAlpha = function () {
          return this.premultipliedAlpha
        }, E.prototype.setAnisotropy = function (t) {
          this.anisotropy = t
        }, E.prototype.getAnisotropy = function () {
          return this.anisotropy
        }, E.prototype.getClippingProcess = function () {
          return this.clippingProcess
        }, E.prototype.setClippingProcess = function (t) {
          this.clippingProcess = t
        }, E.prototype.setClipBufPre_clipContextForMask = function (t) {
          this.clipBufPre_clipContextMask = t
        }, E.prototype.getClipBufPre_clipContextMask = function () {
          return this.clipBufPre_clipContextMask
        }, E.prototype.setClipBufPre_clipContextForDraw = function (t) {
          this.clipBufPre_clipContextDraw = t
        }, E.prototype.getClipBufPre_clipContextDraw = function () {
          return this.clipBufPre_clipContextDraw
        }, I._$ur = -2, I._$c2 = 1, I._$_b = 2, I.prototype._$F0 = function (t) {
          this._$kP = t._$nP(), this._$dr = t._$nP()
        }, I.prototype.readV2_opacity = function (t) {
          t.getFormatVersion() >= G.LIVE2D_FORMAT_VERSION_V2_10_SDK2 && (this._$mS = t._$Tb())
        }, I.prototype.init = function (t) { }, I.prototype._$Nr = function (t, i) { }, I.prototype.interpolateOpacity = function (t, i, e, r) {
          this._$mS == null ? e.setInterpolatedOpacity(1) : e.setInterpolatedOpacity(v._$br(t, i, r, this._$mS))
        }, I.prototype._$2b = function (t, i) { }, I.prototype._$nb = function (t, i, e, r, o, n, s) { }, I.prototype.getType = function () { }, I.prototype._$gs = function (t) {
          this._$dr = t
        }, I.prototype._$a2 = function (t) {
          this._$kP = t
        }, I.prototype.getTargetBaseDataID = function () {
          return this._$dr
        }, I.prototype.getBaseDataID = function () {
          return this._$kP
        }, I.prototype._$32 = function () {
          return this._$dr != null && this._$dr != yt._$2o()
        }, w._$W2 = 0, w._$CS = w._$W2, w._$Mo = function () {
          return !0
        }, w._$XP = function (t) {
          try {
            for (var i = getTimeMSec(); getTimeMSec() - i < t;);
          } catch (t) {
            t._$Rb()
          }
        }, w.getUserTimeMSec = function () {
          return w._$CS == w._$W2 ? w.getSystemTimeMSec() : w._$CS
        }, w.setUserTimeMSec = function (t) {
          w._$CS = t
        }, w.updateUserTimeMSec = function () {
          return w._$CS = w.getSystemTimeMSec()
        }, w.getTimeMSec = function () {
          return (new Date()).getTime()
        }, w.getSystemTimeMSec = function () {
          return (new Date()).getTime()
        }, w._$Q = function (t) { }, w._$jT = function (t, i, e, r, o) {
          for (var n = 0; n < o; n++) e[r + n] = t[i + n]
        }, x._$ds = -2, x.prototype._$F0 = function (t) {
          this._$wL = t._$nP(), this._$VP = t._$6L(), this._$GP = t._$nP()
        }, x.prototype.getParamIndex = function (t) {
          return this._$2r != t && (this._$8o = x._$ds), this._$8o
        }, x.prototype._$Pb = function (t, i) {
          this._$8o = t, this._$2r = i
        }, x.prototype.getParamID = function () {
          return this._$wL
        }, x.prototype._$yP = function (t) {
          this._$wL = t
        }, x.prototype._$N2 = function () {
          return this._$VP
        }, x.prototype._$d2 = function () {
          return this._$GP
        }, x.prototype._$t2 = function (t, i) {
          this._$VP = t, this._$GP = i
        }, x.prototype._$Lr = function () {
          return this._$O2
        }, x.prototype._$wr = function (t) {
          this._$O2 = t
        }, x.prototype._$SL = function () {
          return this._$ri
        }, x.prototype._$AL = function (t) {
          this._$ri = t
        }, O.startsWith = function (t, i, e) {
          var r = i + e.length
          if (r >= t.length) return !1
          for (var o = i; o < r; o++) if (O.getChar(t, o) != e.charAt(o - i)) return !1
          return !0
        }, O.getChar = function (t, i) {
          return String.fromCharCode(t.getUint8(i))
        }, O.createString = function (t, i, e) {
          for (var r = new ArrayBuffer(2 * e), o = new Uint16Array(r), n = 0; n < e; n++) o[n] = t.getUint8(i + n)
          return String.fromCharCode.apply(null, o)
        }, O._$LS = function (t, i, e, r) {
          t instanceof ArrayBuffer && (t = new DataView(t))
          var o = e
          var n = !1
          var s = !1
          var _ = 0
          var a = O.getChar(t, o)
          a == '-' && (n = !0, o++)
          for (var h = !1; o < i; o++) {
            switch (a = O.getChar(t, o)) {
              case '0':
                _ *= 10
                break
              case '1':
                _ = 10 * _ + 1
                break
              case '2':
                _ = 10 * _ + 2
                break
              case '3':
                _ = 10 * _ + 3
                break
              case '4':
                _ = 10 * _ + 4
                break
              case '5':
                _ = 10 * _ + 5
                break
              case '6':
                _ = 10 * _ + 6
                break
              case '7':
                _ = 10 * _ + 7
                break
              case '8':
                _ = 10 * _ + 8
                break
              case '9':
                _ = 10 * _ + 9
                break
              case '.':
                s = !0, o++, h = !0
                break
              default:
                h = !0
            }
            if (h) break
          }
          if (s) {
            for (var l = 0.1, $ = !1; o < i; o++) {
              switch (a = O.getChar(t, o)) {
                case '0':
                  break
                case '1':
                  _ += 1 * l
                  break
                case '2':
                  _ += 2 * l
                  break
                case '3':
                  _ += 3 * l
                  break
                case '4':
                  _ += 4 * l
                  break
                case '5':
                  _ += 5 * l
                  break
                case '6':
                  _ += 6 * l
                  break
                case '7':
                  _ += 7 * l
                  break
                case '8':
                  _ += 8 * l
                  break
                case '9':
                  _ += 9 * l
                  break
                default:
                  $ = !0
              }
              if (l *= 0.1, $) break
            }
          }
          return n && (_ = -_), r[0] = o, _
        }, D.prototype._$zP = function () {
          this._$Ob = new Array()
        }, D.prototype._$F0 = function (t) {
          this._$Ob = t._$nP()
        }, D.prototype._$Ur = function (t) {
          if (t._$WS()) return !0
          for (var i = t._$v2(), e = this._$Ob.length - 1; e >= 0; --e) {
            var r = this._$Ob[e].getParamIndex(i)
            if (r == x._$ds && (r = t.getParamIndex(this._$Ob[e].getParamID())), t._$Xb(r)) return !0
          }
          return !1
        }, D.prototype._$Q2 = function (t, i) {
          for (var e, r, o = this._$Ob.length, n = t._$v2(), s = 0, _ = 0; _ < o; _++) {
            var a = this._$Ob[_]
            if (e = a.getParamIndex(n), e == x._$ds && (e = t.getParamIndex(a.getParamID()), a._$Pb(e, n)), e < 0) throw new Exception('err 23242 : ' + a.getParamID())
            var h = e < 0 ? 0 : t.getParamFloat(e)
            r = a._$N2()
            var l; var $; var u = a._$d2()
            var p = -1
            var f = 0
            if (r < 1);
            else if (r == 1) l = u[0], l - U._$J < h && h < l + U._$J ? (p = 0, f = 0) : (p = 0, i[0] = !0)
            else if (l = u[0], h < l - U._$J) p = 0, i[0] = !0
            else if (h < l + U._$J) p = 0
            else {
              for (var c = !1, d = 1; d < r; ++d) {
                if ($ = u[d], h < $ + U._$J) {
                  $ - U._$J < h ? p = d : (p = d - 1, f = (h - l) / ($ - l), s++), c = !0
                  break
                }
                l = $
              }
              c || (p = r - 1, f = 0, i[0] = !0)
            }
            a._$wr(p), a._$AL(f)
          }
          return s
        }, D.prototype._$zr = function (t, i, e) {
          var r = 1 << e
          r + 1 > U._$Qb && console.log('err 23245\n')
          for (var o = this._$Ob.length, n = 1, s = 1, _ = 0, a = 0; a < r; ++a) t[a] = 0
          for (var h = 0; h < o; ++h) {
            var l = this._$Ob[h]
            if (l._$SL() == 0) {
              var $ = l._$Lr() * n
              if ($ < 0 && at._$3T) throw new Exception('err 23246')
              for (var a = 0; a < r; ++a) t[a] += $
            } else {
              for (var $ = n * l._$Lr(), u = n * (l._$Lr() + 1), a = 0; a < r; ++a) t[a] += (a / s | 0) % 2 == 0 ? $ : u
              i[_++] = l._$SL(), s *= 2
            }
            n *= l._$N2()
          }
          t[r] = 65535, i[_] = -1
        }, D.prototype._$h2 = function (t, i, e) {
          for (var r = new Float32Array(i), o = 0; o < i; ++o) r[o] = e[o]
          var n = new x()
          n._$yP(t), n._$t2(i, r), this._$Ob.push(n)
        }, D.prototype._$J2 = function (t) {
          for (var i = t, e = this._$Ob.length, r = 0; r < e; ++r) {
            var o = this._$Ob[r]
            var n = o._$N2()
            var s = i % o._$N2()
            var _ = o._$d2()[s]
            console.log('%s[%d]=%7.2f / ', o.getParamID(), s, _), i /= n
          }
          console.log('\n')
        }, D.prototype.getParamCount = function () {
          return this._$Ob.length
        }, D.prototype._$zs = function () {
          return this._$Ob
        }, R.prototype.identity = function () {
          for (var t = 0; t < 16; t++) this.m[t] = t % 5 == 0 ? 1 : 0
        }, R.prototype.getArray = function () {
          return this.m
        }, R.prototype.getCopyMatrix = function () {
          return new Float32Array(this.m)
        }, R.prototype.setMatrix = function (t) {
          if (t != null && t.length == 16) for (var i = 0; i < 16; i++) this.m[i] = t[i]
        }, R.prototype.mult = function (t, i, e) {
          return i == null ? null : (this == i ? this.mult_safe(this.m, t.m, i.m, e) : this.mult_fast(this.m, t.m, i.m, e), i)
        }, R.prototype.mult_safe = function (t, i, e, r) {
          if (t == e) {
            var o = new Array(16)
            this.mult_fast(t, i, o, r)
            for (var n = 15; n >= 0; --n) e[n] = o[n]
          } else this.mult_fast(t, i, e, r)
        }, R.prototype.mult_fast = function (t, i, e, r) {
          r ? (e[0] = t[0] * i[0] + t[4] * i[1] + t[8] * i[2], e[4] = t[0] * i[4] + t[4] * i[5] + t[8] * i[6], e[8] = t[0] * i[8] + t[4] * i[9] + t[8] * i[10], e[12] = t[0] * i[12] + t[4] * i[13] + t[8] * i[14] + t[12], e[1] = t[1] * i[0] + t[5] * i[1] + t[9] * i[2], e[5] = t[1] * i[4] + t[5] * i[5] + t[9] * i[6], e[9] = t[1] * i[8] + t[5] * i[9] + t[9] * i[10], e[13] = t[1] * i[12] + t[5] * i[13] + t[9] * i[14] + t[13], e[2] = t[2] * i[0] + t[6] * i[1] + t[10] * i[2], e[6] = t[2] * i[4] + t[6] * i[5] + t[10] * i[6], e[10] = t[2] * i[8] + t[6] * i[9] + t[10] * i[10], e[14] = t[2] * i[12] + t[6] * i[13] + t[10] * i[14] + t[14], e[3] = e[7] = e[11] = 0, e[15] = 1) : (e[0] = t[0] * i[0] + t[4] * i[1] + t[8] * i[2] + t[12] * i[3], e[4] = t[0] * i[4] + t[4] * i[5] + t[8] * i[6] + t[12] * i[7], e[8] = t[0] * i[8] + t[4] * i[9] + t[8] * i[10] + t[12] * i[11], e[12] = t[0] * i[12] + t[4] * i[13] + t[8] * i[14] + t[12] * i[15], e[1] = t[1] * i[0] + t[5] * i[1] + t[9] * i[2] + t[13] * i[3], e[5] = t[1] * i[4] + t[5] * i[5] + t[9] * i[6] + t[13] * i[7], e[9] = t[1] * i[8] + t[5] * i[9] + t[9] * i[10] + t[13] * i[11], e[13] = t[1] * i[12] + t[5] * i[13] + t[9] * i[14] + t[13] * i[15], e[2] = t[2] * i[0] + t[6] * i[1] + t[10] * i[2] + t[14] * i[3], e[6] = t[2] * i[4] + t[6] * i[5] + t[10] * i[6] + t[14] * i[7], e[10] = t[2] * i[8] + t[6] * i[9] + t[10] * i[10] + t[14] * i[11], e[14] = t[2] * i[12] + t[6] * i[13] + t[10] * i[14] + t[14] * i[15], e[3] = t[3] * i[0] + t[7] * i[1] + t[11] * i[2] + t[15] * i[3], e[7] = t[3] * i[4] + t[7] * i[5] + t[11] * i[6] + t[15] * i[7], e[11] = t[3] * i[8] + t[7] * i[9] + t[11] * i[10] + t[15] * i[11], e[15] = t[3] * i[12] + t[7] * i[13] + t[11] * i[14] + t[15] * i[15])
        }, R.prototype.translate = function (t, i, e) {
          this.m[12] = this.m[0] * t + this.m[4] * i + this.m[8] * e + this.m[12], this.m[13] = this.m[1] * t + this.m[5] * i + this.m[9] * e + this.m[13], this.m[14] = this.m[2] * t + this.m[6] * i + this.m[10] * e + this.m[14], this.m[15] = this.m[3] * t + this.m[7] * i + this.m[11] * e + this.m[15]
        }, R.prototype.scale = function (t, i, e) {
          this.m[0] *= t, this.m[4] *= i, this.m[8] *= e, this.m[1] *= t, this.m[5] *= i, this.m[9] *= e, this.m[2] *= t, this.m[6] *= i, this.m[10] *= e, this.m[3] *= t, this.m[7] *= i, this.m[11] *= e
        }, R.prototype.rotateX = function (t) {
          var i = Lt.fcos(t)
          var e = Lt._$9(t)
          var r = this.m[4]
          this.m[4] = r * i + this.m[8] * e, this.m[8] = r * -e + this.m[8] * i, r = this.m[5], this.m[5] = r * i + this.m[9] * e, this.m[9] = r * -e + this.m[9] * i, r = this.m[6], this.m[6] = r * i + this.m[10] * e, this.m[10] = r * -e + this.m[10] * i, r = this.m[7], this.m[7] = r * i + this.m[11] * e, this.m[11] = r * -e + this.m[11] * i
        }, R.prototype.rotateY = function (t) {
          var i = Lt.fcos(t)
          var e = Lt._$9(t)
          var r = this.m[0]
          this.m[0] = r * i + this.m[8] * -e, this.m[8] = r * e + this.m[8] * i, r = this.m[1], this.m[1] = r * i + this.m[9] * -e, this.m[9] = r * e + this.m[9] * i, r = m[2], this.m[2] = r * i + this.m[10] * -e, this.m[10] = r * e + this.m[10] * i, r = m[3], this.m[3] = r * i + this.m[11] * -e, this.m[11] = r * e + this.m[11] * i
        }, R.prototype.rotateZ = function (t) {
          var i = Lt.fcos(t)
          var e = Lt._$9(t)
          var r = this.m[0]
          this.m[0] = r * i + this.m[4] * e, this.m[4] = r * -e + this.m[4] * i, r = this.m[1], this.m[1] = r * i + this.m[5] * e, this.m[5] = r * -e + this.m[5] * i, r = this.m[2], this.m[2] = r * i + this.m[6] * e, this.m[6] = r * -e + this.m[6] * i, r = this.m[3], this.m[3] = r * i + this.m[7] * e, this.m[7] = r * -e + this.m[7] * i
        }, b.prototype = new et(), b._$tP = new Object(), b._$27 = function () {
          b._$tP.clear()
        }, b.getID = function (t) {
          var i = b._$tP[t]
          return i == null && (i = new b(t), b._$tP[t] = i), i
        }, b.prototype._$3s = function () {
          return new b()
        }, F._$kS = -1, F._$pS = 0, F._$hb = 1, F.STATE_IDENTITY = 0, F._$gb = 1, F._$fo = 2, F._$go = 4, F.prototype.transform = function (t, i, e) {
          var r; var o; var n; var s; var _; var a; var h = 0
          var l = 0
          switch (this._$hi) {
            default:
              return
            case F._$go | F._$fo | F._$gb:
              for (r = this._$7, o = this._$H, n = this._$k, s = this._$f, _ = this._$g, a = this._$w; --e >= 0;) {
                var $ = t[h++]
                var u = t[h++]
                i[l++] = r * $ + o * u + n, i[l++] = s * $ + _ * u + a
              }
              return
            case F._$go | F._$fo:
              for (r = this._$7, o = this._$H, s = this._$f, _ = this._$g; --e >= 0;) {
                var $ = t[h++]
                var u = t[h++]
                i[l++] = r * $ + o * u, i[l++] = s * $ + _ * u
              }
              return
            case F._$go | F._$gb:
              for (o = this._$H, n = this._$k, s = this._$f, a = this._$w; --e >= 0;) {
                var $ = t[h++]
                i[l++] = o * t[h++] + n, i[l++] = s * $ + a
              }
              return
            case F._$go:
              for (o = this._$H, s = this._$f; --e >= 0;) {
                var $ = t[h++]
                i[l++] = o * t[h++], i[l++] = s * $
              }
              return
            case F._$fo | F._$gb:
              for (r = this._$7, n = this._$k, _ = this._$g, a = this._$w; --e >= 0;) i[l++] = r * t[h++] + n, i[l++] = _ * t[h++] + a
              return
            case F._$fo:
              for (r = this._$7, _ = this._$g; --e >= 0;) i[l++] = r * t[h++], i[l++] = _ * t[h++]
              return
            case F._$gb:
              for (n = this._$k, a = this._$w; --e >= 0;) i[l++] = t[h++] + n, i[l++] = t[h++] + a
              return
            case F.STATE_IDENTITY:
              return void (t == i && h == l || w._$jT(t, h, i, l, 2 * e))
          }
        }, F.prototype.update = function () {
          this._$H == 0 && this._$f == 0 ? this._$7 == 1 && this._$g == 1 ? this._$k == 0 && this._$w == 0 ? (this._$hi = F.STATE_IDENTITY, this._$Z = F._$pS) : (this._$hi = F._$gb, this._$Z = F._$hb) : this._$k == 0 && this._$w == 0 ? (this._$hi = F._$fo, this._$Z = F._$kS) : (this._$hi = F._$fo | F._$gb, this._$Z = F._$kS) : this._$7 == 0 && this._$g == 0 ? this._$k == 0 && this._$w == 0 ? (this._$hi = F._$go, this._$Z = F._$kS) : (this._$hi = F._$go | F._$gb, this._$Z = F._$kS) : this._$k == 0 && this._$w == 0 ? (this._$hi = F._$go | F._$fo, this._$Z = F._$kS) : (this._$hi = F._$go | F._$fo | F._$gb, this._$Z = F._$kS)
        }, F.prototype._$RT = function (t) {
          this._$IT(t)
          var i = t[0]
          var e = t[2]
          var r = t[1]
          var o = t[3]
          var n = Math.sqrt(i * i + r * r)
          var s = i * o - e * r
          n == 0 ? at._$so && console.log('affine._$RT() / rt==0') : (t[0] = n, t[1] = s / n, t[2] = (r * o + i * e) / s, t[3] = Math.atan2(r, i))
        }, F.prototype._$ho = function (t, i, e, r) {
          var o = new Float32Array(6)
          var n = new Float32Array(6)
          t._$RT(o), i._$RT(n)
          var s = new Float32Array(6)
          s[0] = o[0] + (n[0] - o[0]) * e, s[1] = o[1] + (n[1] - o[1]) * e, s[2] = o[2] + (n[2] - o[2]) * e, s[3] = o[3] + (n[3] - o[3]) * e, s[4] = o[4] + (n[4] - o[4]) * e, s[5] = o[5] + (n[5] - o[5]) * e, r._$CT(s)
        }, F.prototype._$CT = function (t) {
          var i = Math.cos(t[3])
          var e = Math.sin(t[3])
          this._$7 = t[0] * i, this._$f = t[0] * e, this._$H = t[1] * (t[2] * i - e), this._$g = t[1] * (t[2] * e + i), this._$k = t[4], this._$w = t[5], this.update()
        }, F.prototype._$IT = function (t) {
          t[0] = this._$7, t[1] = this._$f, t[2] = this._$H, t[3] = this._$g, t[4] = this._$k, t[5] = this._$w
        }, C.prototype = new s(), C._$cs = 'VISIBLE:', C._$ar = 'LAYOUT:', C._$Co = 0, C._$D2 = [], C._$1T = 1, C.loadMotion = function (t) {
          var i = new C()
          var e = [0]
          var r = t.length
          i._$yT = 0
          for (var o = 0; o < r; ++o) {
            var n = 255 & t[o]
            if (n != '\n' && n != '\r') {
              if (n != '#') {
                if (n != '$') {
                  if (n >= 'a' && n <= 'z' || n>= 'A' && n <= 'z' || n="=" '_') { for (var s="o," _="-1;" o < r && ((n="255" & t[o]) !="\r" ); ++o) if (n="=" '=") {
                        _ = o
                        break
                      }
                    }
                    if (_ >= 0) {
                      var a = new B()
                      O.startsWith(t, s, C._$cs) ? (a._$RP = B._$hs, a._$4P = new String(t, s, _ - s)) : O.startsWith(t, s, C._$ar) ? (a._$4P = new String(t, s + 7, _ - s - 7), O.startsWith(t, s + 7, " anchor_x') ? a._$rp="B._$xs" : o.startswith(t, + 7, 'anchor_y') 'scale_x') 'scale_y') 'x') 'y') (a._$rp="B._$Ns))" a._$4p="new" string(t, s, - s)), i.motions.push(a) var h="0" (c._$d2.clear(), 1; ) l="O._$LS(t," r, o, e) (e[0]> 0) {
                            C._$D2.push(l), h++
                            var $ = e[0]
                            if ($ < o) {
                              console.log('_$n0 _$hi . @Live2DMotion loadMotion()\n')
                              break
                            }
                            o = $
                          }
                        }
                      }
                      a._$I0 = C._$D2._$BL(), h > i._$yT && (i._$yT = h)
                    }
                  }
                } else {
                  for (var s = o, _ = -1; o < r && ((n = 255 & t[o]) != '\r' && n != '\n'); ++o) {
                    if (n == '=') {
                      _ = o
                      break
                    }
                  }
                  var u = !1
                  if (_ >= 0) {
                    for (_ == s + 4 && t[s + 1] == 'f' && t[s + 2] == 'p' && t[s + 3] == 's' && (u = !0), o = _ + 1; o < r && ((n = 255 & t[o]) != '\r' && n != '\n'); ++o) {
                      if (n != ',' && n != ' ' && n != '\t') {
                        var l = O._$LS(t, r, o, e)
                        e[0] > 0 && u && l > 5 && l < 121 && (i._$D0 = l), o = e[0]
                      }
                    }
                  }
                  for (; o < r && (t[o] != '\n' && t[o] != '\r'); ++o);
                }
              } else for (; o < r && (t[o] != '\n' && t[o] != '\r'); ++o);
            }
          }
          return i._$AS = 1e3 * i._$yT / i._$D0 | 0, i
        }, C.prototype.getDurationMSec = function () {
          return this._$AS
        }, C.prototype.dump = function () {
          for (var t = 0; t < this.motions.length; t++) {
            var i = this.motions[t]
            console.log('_$wL[%s] [%d]. ', i._$4P, i._$I0.length)
            for (var e = 0; e < i._$I0.length && e < 10; e++) console.log('%5.2f ,', i._$I0[e])
            console.log('\n')
          }
        }, C.prototype.updateParamExe = function (t, i, e, r) {
          for (var o = i - r._$z2, n = o * this._$D0 / 1e3, s = 0 | n, _ = n - s, a = 0; a < this.motions.length; a++) {
            var h = this.motions[a]
            var l = h._$I0.length
            var $ = h._$4P
            if (h._$RP == B._$hs) {
              var u = h._$I0[s >= l ? l - 1 : s]
              t.setParamFloat($, u)
            } else if (B._$ws <= h._$rp && <="B._$Ys);" else { var p="t.getParamFloat($)" f="h._$I0[s">= l ? l - 1 : s]
              var c = h._$I0[s + 1 >= l ? l - 1 : s + 1]
              var d = f + (c - f) * _
              var g = p + (d - p) * e
              t.setParamFloat($, g)
            }
          }
          s >= this._$yT && (this._$E ? (r._$z2 = i, this.loopFadeIn && (r._$bs = i)) : r._$9L = !0)
        }, C.prototype._$r0 = function () {
          return this._$E
        }, C.prototype._$aL = function (t) {
          this._$E = t
        }, C.prototype.isLoopFadeIn = function () {
          return this.loopFadeIn
        }, C.prototype.setLoopFadeIn = function (t) {
          this.loopFadeIn = t
        }, N.prototype.clear = function () {
          this.size = 0
        }, N.prototype.add = function (t) {
          if (this._$P.length <= this.size) { var i="new" float32array(2 * w._$jt(this._$p, 0, i, this.size), this._$p="i" } this._$p[this.size++]="t" }, n.prototype._$bl="function" () t="new" float32array(this.size) return t, b._$fr="0," b._$hs="1," b._$ws="100," b._$ns="101," b._$xs="102," b._$us="103," b._$qs="104," b._$ys="105," u._$ms="1," u._$qs="2," u._$i2="0," u._$no="2," u._$do="U._$Ms," u._$ls="!0," u._$1r="5," u._$qb="65," u._$j="1e-4," u._$ft="0.001," u._$ss="3," g._$o7="6," g._$s7="7," g._$77="9," g.live2d_format_version_v2_10_sdk2="10," g.live2d_format_version_v2_11_sdk2_1="11," g._$t7="G.LIVE2D_FORMAT_VERSION_V2_11_SDK2_1," g._$is="-2004318072," g._$h0="0," g._$4l="23," g._$7p="33," g._$ut="function" (t) console.log('_$bo :: _$6 _$mo _$e0 : %d\n', t) g._$9o="function" if (t < 40) g._$ut(t), null 50) 60) 100) switch case 65: new z() 66: d() 67: x() 68: 69: p() 70: $t() default: else 150) 131: st() 133: tt() 136: 137: ot() 142: j() y._$hp="0," y._$_0="!0" y._$v2="-1," y._$w0="-1," y._$jr="!1," y._$zs="!0," y._$tr="-1e6," y._$lr="1e6," y._$is="32," y._$e="!1," y.prototype.getdrawdataindex="function" for (var - 1;>= 0; --i) if (this._$aS[i] != null && this._$aS[i].getDrawDataID() == t) return i
          return -1
        }, Y.prototype.getDrawData = function (t) {
          if (t instanceof b) {
            if (this._$Bo == null) {
              this._$Bo = new Object()
              for (var i = this._$aS.length, e = 0; e < i; e++) {
                var r = this._$aS[e]
                var o = r.getDrawDataID()
                o != null && (this._$Bo[o] = r)
              }
            }
            return this._$Bo[id]
          }
          return t < this._$aS.length ? this._$aS[t] : null
        }, Y.prototype.release = function () {
          this._$3S.clear(), this._$aS.clear(), this._$F2.clear(), this._$Bo != null && this._$Bo.clear(), this._$db.clear(), this._$8b.clear(), this._$Hr.clear()
        }, Y.prototype.init = function () {
          this._$co++, this._$F2.length > 0 && this.release()
          for (var t = this._$Ri.getModelImpl(), i = t._$Xr(), r = i.length, o = new Array(), n = new Array(), s = 0; s < r; ++s) {
            var _ = i[s]
            this._$F2.push(_), this._$Hr.push(_.init(this))
            for (var a = _.getBaseData(), h = a.length, l = 0; l < h; ++l) o.push(a[l])
            for (var l = 0; l < h; ++l) {
              var $ = a[l].init(this)
              $._$l2(s), n.push($)
            }
            for (var u = _.getDrawData(), p = u.length, l = 0; l < p; ++l) {
              var f = u[l]
              var c = f.init(this)
              c._$IP = s, this._$aS.push(f), this._$8b.push(c)
            }
          }
          for (var d = o.length, g = yt._$2o(); ;) {
            for (var y = !1, s = 0; s < d; ++s) {
              var m = o[s]
              if (m != null) {
                var T = m.getTargetBaseDataID();
                (T == null || T == g || this.getBaseDataIndex(T) >= 0) && (this._$3S.push(m), this._$db.push(n[s]), o[s] = null, y = !0)
              }
            }
            if (!y) break
          }
          var P = t._$E2()
          if (P != null) {
            var S = P._$1s()
            if (S != null) {
              for (var v = S.length, s = 0; s < v; ++s) {
                var L = S[s]
                L != null && this._$02(L.getParamID(), L.getDefaultValue(), L.getMinValue(), L.getMaxValue())
              }
            }
          }
          this.clipManager = new e(this.dp_webgl), this.clipManager.init(this, this._$aS, this._$8b), this._$QT = !0
        }, Y.prototype.update = function () {
          Y._$e && _.start('_$zL')
          for (var t = this._$_2.length, i = 0; i < t; i++) this._$_2[i] != this._$vr[i] && (this._$Js[i] = Y._$ZS, this._$vr[i] = this._$_2[i])
          var e = this._$3S.length
          var r = this._$aS.length
          var o = W._$or()
          var n = W._$Pr()
          var s = n - o + 1;
          (this._$Ws == null || this._$Ws.length < s) && (this._$Ws = new Int16Array(s), this._$Vs = new Int16Array(s))
          for (var i = 0; i < s; i++) this._$Ws[i] = Y._$V2, this._$Vs[i] = Y._$V2;
          (this._$Er == null || this._$Er.length < r) && (this._$Er = new Int16Array(r))
          for (var i = 0; i < r; i++) this._$Er[i] = Y._$W0
          Y._$e && _.dump('_$zL'), Y._$e && _.start('_$UL')
          for (var a = null, h = 0; h < e; ++h) {
            var l = this._$3S[h]
            var $ = this._$db[h]
            try {
              l._$Nr(this, $), l._$2b(this, $)
            } catch (t) {
              a == null && (a = t)
            }
          }
          a != null && Y._$_0 && _._$Rb(a), Y._$e && _.dump('_$UL'), Y._$e && _.start('_$DL')
          for (var u = null, p = 0; p < r; ++p) {
            var f = this._$aS[p]
            var c = this._$8b[p]
            try {
              if (f._$Nr(this, c), c._$u2()) continue
              f._$2b(this, c)
              var d; var g = Math.floor(f._$zS(this, c) - o)
              try {
                d = this._$Vs[g]
              } catch (t) {
                console.log('_$li :: %s / %s \t\t\t\t@@_$fS\n', t.toString(), f.getDrawDataID().toString()), g = Math.floor(f._$zS(this, c) - o)
                continue
              }
              d == Y._$V2 ? this._$Ws[g] = p : this._$Er[d] = p, this._$Vs[g] = p
            } catch (t) {
              u == null && (u = t, at._$sT(at._$H7))
            }
          }
          u != null && Y._$_0 && _._$Rb(u), Y._$e && _.dump('_$DL'), Y._$e && _.start('_$eL')
          for (var i = this._$Js.length - 1; i >= 0; i--) this._$Js[i] = Y._$jr
          return this._$QT = !1, Y._$e && _.dump('_$eL'), !1
        }, Y.prototype.preDraw = function (t) {
          this.clipManager != null && (t._$ZT(), this.clipManager.setupClip(this, t))
        }, Y.prototype.draw = function (t) {
          if (this._$Ws == null) return void _._$li('call _$Ri.update() before _$Ri.draw() ')
          var i = this._$Ws.length
          t._$ZT()
          for (var e = 0; e < i; ++e) {
            var r = this._$Ws[e]
            if (r != Y._$V2) {
              for (; ;) {
                var o = this._$aS[r]
                var n = this._$8b[r]
                if (n._$yo()) {
                  var s = n._$IP
                  var a = this._$Hr[s]
                  n._$VS = a.getPartsOpacity(), o.draw(t, this, n)
                }
                var h = this._$Er[r]
                if (h <= r || h="=" y._$w0) break } }, y.prototype.getparamindex="function" (t) { for (var i="this._$pb.length" - 1;>= 0; --i) if (this._$pb[i] == t) return i
          return this._$02(t, 0, Y._$tr, Y._$lr)
        }, Y.prototype._$BS = function (t) {
          return this.getBaseDataIndex(t)
        }, Y.prototype.getBaseDataIndex = function (t) {
          for (var i = this._$3S.length - 1; i >= 0; --i) if (this._$3S[i] != null && this._$3S[i].getBaseDataID() == t) return i
          return -1
        }, Y.prototype._$UT = function (t, i) {
          var e = new Float32Array(i)
          return w._$jT(t, 0, e, 0, t.length), e
        }, Y.prototype._$02 = function (t, i, e, r) {
          if (this._$qo >= this._$pb.length) {
            var o = this._$pb.length
            var n = new Array(2 * o)
            w._$jT(this._$pb, 0, n, 0, o), this._$pb = n, this._$_2 = this._$UT(this._$_2, 2 * o), this._$vr = this._$UT(this._$vr, 2 * o), this._$Rr = this._$UT(this._$Rr, 2 * o), this._$Or = this._$UT(this._$Or, 2 * o)
            var s = new Array()
            w._$jT(this._$Js, 0, s, 0, o), this._$Js = s
          }
          return this._$pb[this._$qo] = t, this._$_2[this._$qo] = i, this._$vr[this._$qo] = i, this._$Rr[this._$qo] = e, this._$Or[this._$qo] = r, this._$Js[this._$qo] = Y._$ZS, this._$qo++
        }, Y.prototype._$Zo = function (t, i) {
          this._$3S[t] = i
        }, Y.prototype.setParamFloat = function (t, i) {
          i < this._$Rr[t] && (i = this._$Rr[t]), i > this._$Or[t] && (i = this._$Or[t]), this._$_2[t] = i
        }, Y.prototype.loadParam = function () {
          var t = this._$_2.length
          t > this._$fs.length && (t = this._$fs.length), w._$jT(this._$fs, 0, this._$_2, 0, t)
        }, Y.prototype.saveParam = function () {
          var t = this._$_2.length
          t > this._$fs.length && (this._$fs = new Float32Array(t)), w._$jT(this._$_2, 0, this._$fs, 0, t)
        }, Y.prototype._$v2 = function () {
          return this._$co
        }, Y.prototype._$WS = function () {
          return this._$QT
        }, Y.prototype._$Xb = function (t) {
          return this._$Js[t] == Y._$ZS
        }, Y.prototype._$vs = function () {
          return this._$Es
        }, Y.prototype._$Tr = function () {
          return this._$ZP
        }, Y.prototype.getBaseData = function (t) {
          return this._$3S[t]
        }, Y.prototype.getParamFloat = function (t) {
          return this._$_2[t]
        }, Y.prototype.getParamMax = function (t) {
          return this._$Or[t]
        }, Y.prototype.getParamMin = function (t) {
          return this._$Rr[t]
        }, Y.prototype.setPartsOpacity = function (t, i) {
          this._$Hr[t].setPartsOpacity(i)
        }, Y.prototype.getPartsOpacity = function (t) {
          return this._$Hr[t].getPartsOpacity()
        }, Y.prototype.getPartsDataIndex = function (t) {
          for (var i = this._$F2.length - 1; i >= 0; --i) if (this._$F2[i] != null && this._$F2[i]._$p2() == t) return i
          return -1
        }, Y.prototype._$q2 = function (t) {
          return this._$db[t]
        }, Y.prototype._$C2 = function (t) {
          return this._$8b[t]
        }, Y.prototype._$Bb = function (t) {
          return this._$Hr[t]
        }, Y.prototype._$5s = function (t, i) {
          for (var e = this._$Ws.length, r = t, o = 0; o < e; ++o) {
            var n = this._$Ws[o]
            if (n != Y._$V2) {
              for (; ;) {
                var s = this._$8b[n]
                s._$yo() && (s._$GT()._$B2(this, s, r), r += i)
                var _ = this._$Er[n]
                if (_ <= n || _="=" y._$w0) break } }, y.prototype.setdrawparam="function" (t) { this.dp_webgl="t" y.prototype.getdrawparam="function" () return k._$0t="function" k._$0t(new _$5(t)) if (!t.exists()) throw new _$ls(t._$3b()) for (var i, e="t.length()," r="new" int8array(e), o="new" _$xs(new _$kb(t), 8192), (i="o.read(r," n, - n))> 0;) n += i
          return r
        }, k._$C = function (t) {
          var i = null
          var e = null
          try {
            i = t instanceof Array ? t : new _$Xs(t, 8192), e = new _$js()
            for (var r, o = new Int8Array(1e3);
              (r = i.read(o)) > 0;) e.write(o, 0, r)
            return e._$TS()
          } finally {
            t != null && t.close(), e != null && (e.flush(), e.close())
          }
        }, V.prototype._$T2 = function () {
          return w.getUserTimeMSec() + Math._$10() * (2 * this._$Br - 1)
        }, V.prototype._$uo = function (t) {
          this._$Br = t
        }, V.prototype._$QS = function (t, i, e) {
          this._$Dr = t, this._$Cb = i, this._$mr = e
        }, V.prototype._$7T = function (t) {
          var i; var e = w.getUserTimeMSec()
          var r = 0
          switch (this._$_L) {
            case STATE_CLOSING:
              r = (e - this._$bb) / this._$Dr, r >= 1 && (r = 1, this._$_L = wt.STATE_CLOSED, this._$bb = e), i = 1 - r
              break
            case STATE_CLOSED:
              r = (e - this._$bb) / this._$Cb, r >= 1 && (this._$_L = wt.STATE_OPENING, this._$bb = e), i = 0
              break
            case STATE_OPENING:
              r = (e - this._$bb) / this._$mr, r >= 1 && (r = 1, this._$_L = wt.STATE_INTERVAL, this._$12 = this._$T2()), i = r
              break
            case STATE_INTERVAL:
              this._$12 < e && (this._$_L = wt.STATE_CLOSING, this._$bb = e), i = 1
              break
            case STATE_FIRST:
            default:
              this._$_L = wt.STATE_INTERVAL, this._$12 = this._$T2(), i = 1
          }
          this._$jo || (i = -i), t.setParamFloat(this._$iL, i), t.setParamFloat(this._$0L, i)
        }
        var wt = function () { }
        wt.STATE_FIRST = 'STATE_FIRST', wt.STATE_INTERVAL = 'STATE_INTERVAL', wt.STATE_CLOSING = 'STATE_CLOSING', wt.STATE_CLOSED = 'STATE_CLOSED', wt.STATE_OPENING = 'STATE_OPENING', X.prototype = new E(), X._$As = 32, X._$Gr = !1, X._$NT = null, X._$vS = null, X._$no = null, X._$9r = function (t) {
          return new Float32Array(t)
        }, X._$vb = function (t) {
          return new Int16Array(t)
        }, X._$cr = function (t, i) {
          return t == null || t._$yL() < i.length ? (t = X._$9r(2 * i.length), t.put(i), t._$oT(0)) : (t.clear(), t.put(i), t._$oT(0)), t
        }, X._$mb = function (t, i) {
          return t == null || t._$yL() < i.length ? (t = X._$vb(2 * i.length), t.put(i), t._$oT(0)) : (t.clear(), t.put(i), t._$oT(0)), t
        }, X._$Hs = function () {
          return X._$Gr
        }, X._$as = function (t) {
          X._$Gr = t
        }, X.prototype.setGL = function (t) {
          this.gl = t
        }, X.prototype.setTransform = function (t) {
          this.transform = t
        }, X.prototype._$ZT = function () { }, X.prototype._$Uo = function (t, i, e, r, o, n, s, _) {
          if (!(n < 0.01)) {
            var a = this._$U2[t]
            var h = n > 0.9 ? at.EXPAND_W : 0
            this.gl.drawElements(a, e, r, o, n, h, this.transform, _)
          }
        }, X.prototype._$Rs = function () {
          throw new Error('_$Rs')
        }, X.prototype._$Ds = function (t) {
          throw new Error('_$Ds')
        }, X.prototype._$K2 = function () {
          for (var t = 0; t < this._$sb.length; t++) {
            this._$sb[t] != 0 && (this.gl._$Sr(1, this._$sb, t), this._$sb[t] = 0)
          }
        }, X.prototype.setTexture = function (t, i) {
          this._$sb.length < t + 1 && this._$nS(t), this._$sb[t] = i
        }, X.prototype.setTexture = function (t, i) {
          this._$sb.length < t + 1 && this._$nS(t), this._$U2[t] = i
        }, X.prototype._$nS = function (t) {
          var i = Math.max(2 * this._$sb.length, t + 1 + 10)
          var e = new Int32Array(i)
          w._$jT(this._$sb, 0, e, 0, this._$sb.length), this._$sb = e
          var r = new Array()
          w._$jT(this._$U2, 0, r, 0, this._$U2.length), this._$U2 = r
        }, z.prototype = new I(), z._$Xo = new Float32Array(2), z._$io = new Float32Array(2), z._$0o = new Float32Array(2), z._$Lo = new Float32Array(2), z._$To = new Float32Array(2), z._$Po = new Float32Array(2), z._$gT = new Array(), z.prototype._$zP = function () {
          this._$GS = new D(), this._$GS._$zP(), this._$Y0 = new Array()
        }, z.prototype.getType = function () {
          return I._$c2
        }, z.prototype._$F0 = function (t) {
          I.prototype._$F0.call(this, t), this._$GS = t._$nP(), this._$Y0 = t._$nP(), I.prototype.readV2_opacity.call(this, t)
        }, z.prototype.init = function (t) {
          var i = new H(this)
          return i._$Yr = new P(), this._$32() && (i._$Wr = new P()), i
        }, z.prototype._$Nr = function (t, i) {
          this != i._$GT() && console.log('### assert!! ### ')
          var e = i
          if (this._$GS._$Ur(t)) {
            var r = z._$gT
            r[0] = !1
            var o = this._$GS._$Q2(t, r)
            i._$Ib(r[0]), this.interpolateOpacity(t, this._$GS, i, r)
            var n = t._$vs()
            var s = t._$Tr()
            if (this._$GS._$zr(n, s, o), o <= 0 1 2="=" 0) { var _="this._$Y0[n[0]]" e._$yr.init(_) } else if (o="=" 1) a="this._$Y0[n[1]]" h="s[0]" e._$yr._$fl="_._$fL" + (a._$fl - _._$fl) * h, e._$yr._$gl="_._$gL" (a._$gl _._$gl) e._$yr._$b0="_._$B0" (a._$b0 _._$b0) e._$yr._$z0="_._$z0" (a._$z0 _._$z0) e._$yr._$qt="_._$qT" (a._$qt _._$qt) 2) l="this._$Y0[n[2]]" $="this._$Y0[n[3]]" u="s[1]" p="_._$fL" f="l._$fL" ($._$fl l._$fl) (f p) u, ($._$gl l._$gl) ($._$b0 l._$b0) ($._$z0 l._$z0) ($._$qt l._$qt) 3) c="this._$Y0[n[0]]" d="this._$Y0[n[1]]" g="this._$Y0[n[2]]" y="this._$Y0[n[3]]" m="this._$Y0[n[4]]" t="this._$Y0[n[5]]" s="this._$Y0[n[7]]" v="s[2]" (d._$fl c._$fl) (y._$fl g._$fl) (t._$fl m._$fl) (s._$fl p._$fl) v) (p u) (l (m l) u), (d._$gl c._$gl) (y._$gl g._$gl) (t._$gl m._$gl) (s._$gl p._$gl) (d._$b0 c._$b0) (y._$b0 g._$b0) (t._$b0 m._$b0) (s._$b0 p._$b0) (d._$z0 c._$z0) (y._$z0 g._$z0) (t._$z0 m._$z0) (s._$z0 p._$z0) (d._$qt c._$qt) (y._$qt g._$qt) (t._$qt m._$qt) (s._$qt p._$qt) 4) e="this._$Y0[n[0]]" i="this._$Y0[n[2]]" w="this._$Y0[n[3]]" x="this._$Y0[n[4]]" o="this._$Y0[n[5]]" r="this._$Y0[n[7]]" b="this._$Y0[n[8]]" n="this._$Y0[n[11]]" k="s[3]" e._$fl) (w._$fl i._$fl) (o._$fl x._$fl) (r._$fl d._$fl) (f._$fl b._$fl) (n._$fl (u._$fl k) ((1 u)) (v (x (h (w h) u)), e._$gl) (w._$gl i._$gl) (o._$gl x._$gl) (r._$gl d._$gl) (f._$gl b._$gl) (n._$gl (u._$gl e._$b0) (w._$b0 i._$b0) (o._$b0 x._$b0) (r._$b0 d._$b0) (f._$b0 b._$b0) (n._$b0 (u._$b0 e._$z0) (w._$z0 i._$z0) (o._$z0 x._$z0) (r._$z0 d._$z0) (f._$z0 b._$z0) (n._$z0 (u._$z0 e._$qt) (w._$qt i._$qt) (o._$qt x._$qt) (r._$qt d._$qt) (f._$qt b._$qt) (n._$qt (u._$qt for (var j="0" | math.pow(2, o), q="new" float32array(j), < j; j++) z="1," o; k++) % ? s[k] : s[k], = q[j]="Z" tt="new" array(), it="0;" it++) tt[it]="this._$Y0[n[it]]" et="0," rt="0," ot="0," nt="0," st="0," tt[it]._$fl, tt[it]._$gl, tt[it]._$b0, tt[it]._$z0, tt[it]._$qt e._$yr.reflectx="_.reflectX," e._$yr.reflecty="_.reflectY" }, z.prototype._$2b="function" (t, i) this !="i._$GT()" && console.log('### assert!! ### ') (e._$hs(!0), this._$32()) (e._$8r="=" i._$ur e._$8r at._$so _._$li('_$l _$0p _$g :: %s', r), e._$hs(!1) s[0]="e._$Yr._$fL," s[1]="e._$Yr._$gL" a[0]="0," a[1]="-0.1" n._$gt().gettype()="=" i._$c2 this._$jr(t, o, n, s, a, o._$nb(t, 1, 0, 2), e._$wr._$fl="s[0]," e._$wr._$gl="s[1]," e._$wr._$b0="e._$Yr._$B0," e._$wr._$z0="e._$Yr._$z0," e._$wr._$qt="e._$Yr._$qT" lt._$ns e.settotalscale_notforclient($ e._$wr._$b0) e.settotalopacity(u e.getinterpolatedopacity()), e._$wr.reflectx="e._$Yr.reflectX," e._$wr.reflecty="e._$Yr.reflectY," e._$hs(n._$yo()) e.settotalscale_notforclient(e._$yr._$b0), e.settotalopacity(e.getinterpolatedopacity()) z.prototype._$nb="function" i, e, r, s) _, h._$wr h._$yr, l._$qt), -1 f, c, s; 1], r[v]="d" t, r[v 1]="y" z.prototype._$jr="function" n) z._$lo[0]="r[0]," z._$lo[1]="r[1]," i._$nb(t, 10; l++) (a[0]="r[0]" o[0], o[1], _[0] _[1] || return n[0]="_[0]," void (n[1]="_[1])" console.log('_$l0 to transform _$sp\n') h.prototype="new" _t(), w.prototype="new" m(), w._$ur="-2," w._$es="500," w._$wb="2," w._$8s="3," w._$os="4," w._$52="W._$ES," w._$r2="W._$ES," w._$sb="function" (t) 1;>= 0; --i) {
            var e = t[i]
            e < W._$52 ? W._$52 = e : e > W._$R2 && (W._$R2 = e)
          }
        }, W._$or = function () {
          return W._$52
        }, W._$Pr = function () {
          return W._$R2
        }, W.prototype._$F0 = function (t) {
          this._$gP = t._$nP(), this._$dr = t._$nP(), this._$GS = t._$nP(), this._$qb = t._$6L(), this._$Lb = t._$cS(), this._$mS = t._$Tb(), t.getFormatVersion() >= G._$T7 ? (this.clipID = t._$nP(), this.clipIDList = this.convertClipIDForV2_11(this.clipID)) : this.clipIDList = null, W._$Sb(this._$Lb)
        }, W.prototype.getClipIDList = function () {
          return this.clipIDList
        }, W.prototype._$Nr = function (t, i) {
          if (i._$IS[0] = !1, i._$Us = v._$Z2(t, this._$GS, i._$IS, this._$Lb), at._$Zs);
          else if (i._$IS[0]) return
          i._$7s = v._$br(t, this._$GS, i._$IS, this._$mS)
        }, W.prototype._$2b = function (t) { }, W.prototype.getDrawDataID = function () {
          return this._$gP
        }, W.prototype._$j2 = function (t) {
          this._$gP = t
        }, W.prototype.getOpacity = function (t, i) {
          return i._$7s
        }, W.prototype._$zS = function (t, i) {
          return i._$Us
        }, W.prototype.getTargetBaseDataID = function () {
          return this._$dr
        }, W.prototype._$gs = function (t) {
          this._$dr = t
        }, W.prototype._$32 = function () {
          return this._$dr != null && this._$dr != yt._$2o()
        }, W.prototype.getType = function () { }, j._$42 = 0, j.prototype._$1b = function () {
          return this._$3S
        }, j.prototype.getDrawDataList = function () {
          return this._$aS
        }, j.prototype._$F0 = function (t) {
          this._$NL = t._$nP(), this._$aS = t._$nP(), this._$3S = t._$nP()
        }, j.prototype._$kr = function (t) {
          t._$Zo(this._$3S), t._$xo(this._$aS), this._$3S = null, this._$aS = null
        }, q.prototype = new i(), q.loadModel = function (t) {
          var e = new q()
          return i._$62(e, t), e
        }, q.loadModel = function (t) {
          var e = new q()
          return i._$62(e, t), e
        }, q._$to = function () {
          return new q()
        }, q._$er = function (t) {
          var i = new _$5('../_$_r/_$t0/_$Ri/_$_P._$d')
          if (i.exists() == 0) throw new _$ls('_$t0 _$_ _$6 _$Ui :: ' + i._$PL())
          for (var e = ['../_$_r/_$t0/_$Ri/_$_P.512/_$CP._$1', '../_$_r/_$t0/_$Ri/_$_P.512/_$vP._$1', '../_$_r/_$t0/_$Ri/_$_P.512/_$EP._$1', '../_$_r/_$t0/_$Ri/_$_P.512/_$pP._$1'], r = q.loadModel(i._$3b()), o = 0; o < e.length; o++) {
            var n = new _$5(e[o])
            if (n.exists() == 0) throw new _$ls('_$t0 _$_ _$6 _$Ui :: ' + n._$PL())
            r.setTexture(o, _$nL._$_o(t, n._$3b()))
          }
          return r
        }, q.prototype.setGL = function (t) {
          this._$zo.setGL(t)
        }, q.prototype.setTransform = function (t) {
          this._$zo.setTransform(t)
        }, q.prototype.draw = function () {
          this._$5S.draw(this._$zo)
        }, q.prototype._$K2 = function () {
          this._$zo._$K2()
        }, q.prototype.setTexture = function (t, i) {
          this._$zo == null && _._$li('_$Yi for QT _$ki / _$XS() is _$6 _$ui!!'), this._$zo.setTexture(t, i)
        }, q.prototype.setTexture = function (t, i) {
          this._$zo == null && _._$li('_$Yi for QT _$ki / _$XS() is _$6 _$ui!!'), this._$zo.setTexture(t, i)
        }, q.prototype._$Rs = function () {
          return this._$zo._$Rs()
        }, q.prototype._$Ds = function (t) {
          this._$zo._$Ds(t)
        }, q.prototype.getDrawParam = function () {
          return this._$zo
        }, J.prototype = new s(), J._$cs = 'VISIBLE:', J._$ar = 'LAYOUT:', J.MTN_PREFIX_FADEIN = 'FADEIN:', J.MTN_PREFIX_FADEOUT = 'FADEOUT:', J._$Co = 0, J._$1T = 1, J.loadMotion = function (t) {
          var i = k._$C(t)
          return J.loadMotion(i)
        }, J.loadMotion = function (t) {
          t instanceof ArrayBuffer && (t = new DataView(t))
          var i = new J()
          var e = [0]
          var r = t.byteLength
          i._$yT = 0
          for (var o = 0; o < r; ++o) {
            var n = Q(t, o)
            var s = n.charCodeAt(0)
            if (n != '\n' && n != '\r') {
              if (n != '#') {
                if (n != '$') {
                  if (s >= 97 && s <= 122 || s>= 65 && s <= 90 || n="=" '_') { for (var _="o," a="-1;" o < r && ((n="Q(t," o)) !="\r" ); ++o) if (n="=" '=") {
                        a = o
                        break
                      }
                    }
                    if (a >= 0) {
                      var h = new B()
                      O.startsWith(t, _, J._$cs) ? (h._$RP = B._$hs, h._$4P = O.createString(t, _, a - _)) : O.startsWith(t, _, J._$ar) ? (h._$4P = O.createString(t, _ + 7, a - _ - 7), O.startsWith(t, _ + 7, " anchor_x') ? h._$rp="B._$xs" : o.startswith(t, + 7, 'anchor_y') 'scale_x') 'scale_y') 'x') 'y') (h._$rp="B._$Ns))" h._$4p="O.createString(t," _, - _)), i.motions.push(h) var l="0" $="[]" (o="a" 1; ) u="O._$LS(t," r, o, e) (e[0]> 0) {
                            $.push(u), l++
                            var p = e[0]
                            if (p < o) {
                              console.log('_$n0 _$hi . @Live2DMotion loadMotion()\n')
                              break
                            }
                            o = p - 1
                          }
                        }
                      }
                      h._$I0 = new Float32Array($), l > i._$yT && (i._$yT = l)
                    }
                  }
                } else {
                  for (var _ = o, a = -1; o < r && ((n = Q(t, o)) != '\r' && n != '\n'); ++o) {
                    if (n == '=') {
                      a = o
                      break
                    }
                  }
                  var f = !1
                  if (a >= 0) {
                    for (a == _ + 4 && Q(t, _ + 1) == 'f' && Q(t, _ + 2) == 'p' && Q(t, _ + 3) == 's' && (f = !0), o = a + 1; o < r && ((n = Q(t, o)) != '\r' && n != '\n'); ++o) {
                      if (n != ',' && n != ' ' && n != '\t') {
                        var u = O._$LS(t, r, o, e)
                        e[0] > 0 && f && u > 5 && u < 121 && (i._$D0 = u), o = e[0]
                      }
                    }
                  }
                  for (; o < r && (Q(t, o) != '\n' && Q(t, o) != '\r'); ++o);
                }
              } else for (; o < r && (Q(t, o) != '\n' && Q(t, o) != '\r'); ++o);
            }
          }
          return i._$rr = 1e3 * i._$yT / i._$D0 | 0, i
        }, J.prototype.getDurationMSec = function () {
          return this._$E ? -1 : this._$rr
        }, J.prototype.getLoopDurationMSec = function () {
          return this._$rr
        }, J.prototype.dump = function () {
          for (var t = 0; t < this.motions.length; t++) {
            var i = this.motions[t]
            console.log('_$wL[%s] [%d]. ', i._$4P, i._$I0.length)
            for (var e = 0; e < i._$I0.length && e < 10; e++) console.log('%5.2f ,', i._$I0[e])
            console.log('\n')
          }
        }, J.prototype.updateParamExe = function (t, i, e, r) {
          for (var o = i - r._$z2, n = o * this._$D0 / 1e3, s = 0 | n, _ = n - s, a = 0; a < this.motions.length; a++) {
            var h = this.motions[a]
            var l = h._$I0.length
            var $ = h._$4P
            if (h._$RP == B._$hs) {
              var u = h._$I0[s >= l ? l - 1 : s]
              t.setParamFloat($, u)
            } else if (B._$ws <= h._$rp && <="B._$Ys);" else { var p; f="t.getParamIndex($)" c="t.getModelContext()" d="c.getParamMax(f)" g="c.getParamMin(f)" y="0.4" * (d - g) m="c.getParamFloat(f)" t="h._$I0[s">= l ? l - 1 : s]
              var P = h._$I0[s + 1 >= l ? l - 1 : s + 1]
              p = T < P && P - T > y || T > P && T - P > y ? T : T + (P - T) * _
              var S = m + (p - m) * e
              t.setParamFloat($, S)
            }
          }
          s >= this._$yT && (this._$E ? (r._$z2 = i, this.loopFadeIn && (r._$bs = i)) : r._$9L = !0), this._$eP = e
        }, J.prototype._$r0 = function () {
          return this._$E
        }, J.prototype._$aL = function (t) {
          this._$E = t
        }, J.prototype._$S0 = function () {
          return this._$D0
        }, J.prototype._$U0 = function (t) {
          this._$D0 = t
        }, J.prototype.isLoopFadeIn = function () {
          return this.loopFadeIn
        }, J.prototype.setLoopFadeIn = function (t) {
          this.loopFadeIn = t
        }, N.prototype.clear = function () {
          this.size = 0
        }, N.prototype.add = function (t) {
          if (this._$P.length <= 0 1 this.size) { var i="new" float32array(2 * w._$jt(this._$p, 0, i, this.size), this._$p="i" } this._$p[this.size++]="t" }, n.prototype._$bl="function" () t="new" float32array(this.size) return t, b._$fr="0," b._$hs="1," b._$ws="100," b._$ns="101," b._$xs="102," b._$us="103," b._$qs="104," b._$ys="105," z.prototype="new" i(), z._$gt="new" array(), z.prototype._$zp="function" this._$gs="new" d(), this._$gs._$zp() z.prototype._$f0="function" (t) i.prototype._$f0.call(this, t), this._$a="t._$6L()," this._$o="t._$6L()," this._$eo="t._$nP()," i.prototype.readv2_opacity.call(this, t) z.prototype.init="function" k(this) e="(this._$o" + 1) (this._$a i._$cr !="null" && (i._$cr="null)," e), i._$hr (i._$hr="null)," this._$32() ? e) : z.prototype._$nr="function" (t, i) if (this._$gs._$ur(t)) r="this._$VT()" o="Z._$gT" o[0]="!1," v._$vr(t, this._$gs, o, r, this._$eo, e._$cr, 2), i._$ib(o[0]), this.interpolateopacity(t, o) z.prototype._$2b="function" (e._$hs(!0), this._$32()) (e._$8r="=" i._$ur e._$8r < 0) at._$so _._$li('_$l _$0p _$g :: %s', r), e._$hs(!1) else n="t._$q2(e._$8r)" (o n._$yo()) s="n.getTotalScale()" e.settotalscale_notforclient(s) a="n.getTotalOpacity()" e.settotalopacity(a e.getinterpolatedopacity()), o._$nb(t, n, e._$hr, this._$vt(), e._$hs(!0) e.settotalopacity(e.getinterpolatedopacity()) z.prototype._$nb="function" e, s) _="i" _._$hr _._$cr z.transformpoints_sdk2(e, s, a, this._$o, this._$a) z.transformpoints_sdk2="function" (i, _, a) for (var h, l, $, u="r" p="0," f="0," c="0," d="0," g="0," y="0," m="!1," u; p, v, l (v="i[T]," 1], || (!m) (s[2 (0 m)] s[2 (_ m)]), m) 1] 1]) - w="s[2" (e i), (a w), (c g), (d y)> -2 && v < 3 && L > -2 && L < 3) {
                if (v <= 0 2 0) { if (l <="0)" var x="s[2" * (0 + m)] o="s[2" m) 1] d="p" - c r="f" b="p" g f="f" y n="f" (v -2) u="0.5" ? (e[t]="C" (b c) (d u, e[t (f n) (r u) : x) (1 b) u), o) u)) } else>= 1) {
                    var b = s[2 * (0 + a * M)]
                    var F = s[2 * (0 + a * M) + 1]
                    var C = p - 2 * c + 1 * g
                    var N = f - 2 * d + 1 * y
                    var x = p + 3 * g
                    var O = f + 3 * y
                    var D = p - 2 * c + 3 * g
                    var R = f - 2 * d + 3 * y
                    var B = 0.5 * (v - -2)
                    var U = 0.5 * (L - 1)
                    B + U <= 1 2 ? (e[t]="C" + (b - c) * b (d u, e[t 1]="N" (f n) (r u) : x) (1 b) u), o) u)) } else { var g="0" | s a && (g="a" 1) (v -2) u="S" y="G" k="(G" (0 m)] f="s[2" m) x="s[2" o="s[2" c="p" n="f" d r="f" <="1" if>= 1) {
                  if (L <= 0 1 2 3 0) { var d="s[2" * (_ + m)] r="s[2" m) 1] x="p" c o="f" - g n="f" y b="p" f="f" (v 1) u="0.5" (l -2) <="1" ? (e[t]="C" (b c) (d u, e[t (f n) (r u) : x) (1 b) u), o) u)) } else if>= 1) {
                    var C = s[2 * (_ + a * M)]
                    var N = s[2 * (_ + a * M) + 1]
                    var b = p + 3 * c + 1 * g
                    var F = f + 3 * d + 1 * y
                    var D = p + 1 * c + 3 * g
                    var R = f + 1 * d + 3 * y
                    var x = p + 3 * c + 3 * g
                    var O = f + 3 * d + 3 * y
                    var B = 0.5 * (v - 1)
                    var U = 0.5 * (L - 1)
                    B + U <= 0 1 2 3 ? (e[t]="C" + (b - c) * b (d u, e[t 1]="N" (f n) (r u) : x) (1 b) u), o) u)) } else { var g="0" | s a && (g="a" 1) (v u="S" y="G" k="(G" c="s[2" (_ m)] n="s[2" m) d="s[2" r="s[2" f="f" x="p" o="f" <="1" if (l v="0" p _ -2) z="(V">= 1) {
                  var V = 0 | P
                  V == _ && (V = _ - 1)
                  var B = P - V
                  var U = 0.5 * (L - 1)
                  var X = V / _
                  var z = (V + 1) / _
                  var C = s[2 * (V + a * M)]
                  var N = s[2 * (V + a * M) + 1]
                  var b = s[2 * (V + 1 + a * M)]
                  var F = s[2 * (V + 1 + a * M) + 1]
                  var D = p + X * c + 3 * g
                  var R = f + X * d + 3 * y
                  var x = p + z * c + 3 * g
                  var O = f + z * d + 3 * y
                  B + U <= 0 1 2 ? (e[t]="C" + (b - c) * b (d u, e[t 1]="N" (f n) (r u) : x) (1 b) u), o) u)) } else t.err.printf('_$li calc %.4f , %.4f\t\t\t\t\t@@bdboxgrid\n', v, l) e[t]="p" v c l g, d y (0 | p), $="S" s), h="2" ((0 p) s) (_ 1)), < $) s[h 2] 1)] $, 3] 1) (l $), $)) }, z.prototype.transformpoints_sdk1="function" (t, i, e, r, o, n, { for (var _, a, h, l, p, f="i," g="o" s, !="null" f._$hr f._$cr, m="n;" g; at._$ts a="e[m" 1], _> 1 && (_ = 1), a < 0 ? a = 0 : a > 1 && (a = 1), _ *= c, a *= d, h = 0 | _, l = 0 | a, h > c - 1 && (h = c - 1), l > d - 1 && (l = d - 1), u = _ - h, p = a - l, $ = 2 * (h + l * (c + 1))) : (_ = e[m] * c, a = e[m + 1] * d, u = _ - (0 | _), p = a - (0 | a), $ = 2 * ((0 | _) + (0 | a) * (c + 1))), u + p < 1 ? (r[m] = y[$] * (1 - u - p) + y[$ + 2] * u + y[$ + 2 * (c + 1)] * p, r[m + 1] = y[$ + 1] * (1 - u - p) + y[$ + 3] * u + y[$ + 2 * (c + 1) + 1] * p) : (r[m] = y[$ + 2 * (c + 1) + 2] * (u - 1 + p) + y[$ + 2 * (c + 1)] * (1 - u) + y[$ + 2] * (1 - p), r[m + 1] = y[$ + 2 * (c + 1) + 3] * (u - 1 + p) + y[$ + 2 * (c + 1) + 1] * (1 - u) + y[$ + 3] * (1 - p))
        }, Z.prototype._$VT = function () {
          return (this._$o + 1) * (this._$A + 1)
        }, Z.prototype.getType = function () {
          return I._$_b
        }, K.prototype = new _t(), tt._$42 = 0, tt.prototype._$zP = function () {
          this._$3S = new Array(), this._$aS = new Array()
        }, tt.prototype._$F0 = function (t) {
          this._$g0 = t._$8L(), this.visible = t._$8L(), this._$NL = t._$nP(), this._$3S = t._$nP(), this._$aS = t._$nP()
        }, tt.prototype.init = function (t) {
          var i = new it(this)
          return i.setPartsOpacity(this.isVisible() ? 1 : 0), i
        }, tt.prototype._$6o = function (t) {
          if (this._$3S == null) throw new Error('_$3S _$6 _$Wo@_$6o')
          this._$3S.push(t)
        }, tt.prototype._$3o = function (t) {
          if (this._$aS == null) throw new Error('_$aS _$6 _$Wo@_$3o')
          this._$aS.push(t)
        }, tt.prototype._$Zo = function (t) {
          this._$3S = t
        }, tt.prototype._$xo = function (t) {
          this._$aS = t
        }, tt.prototype.isVisible = function () {
          return this.visible
        }, tt.prototype._$uL = function () {
          return this._$g0
        }, tt.prototype._$KP = function (t) {
          this.visible = t
        }, tt.prototype._$ET = function (t) {
          this._$g0 = t
        }, tt.prototype.getBaseData = function () {
          return this._$3S
        }, tt.prototype.getDrawData = function () {
          return this._$aS
        }, tt.prototype._$p2 = function () {
          return this._$NL
        }, tt.prototype._$ob = function (t) {
          this._$NL = t
        }, tt.prototype.getPartsID = function () {
          return this._$NL
        }, tt.prototype._$MP = function (t) {
          this._$NL = t
        }, it.prototype = new $(), it.prototype.getPartsOpacity = function () {
          return this._$VS
        }, it.prototype.setPartsOpacity = function (t) {
          this._$VS = t
        }, et._$L7 = function () {
          u._$27(), yt._$27(), b._$27(), l._$27()
        }, et.prototype.toString = function () {
          return this.id
        }, rt.prototype._$F0 = function (t) { }, ot.prototype._$1s = function () {
          return this._$4S
        }, ot.prototype._$zP = function () {
          this._$4S = new Array()
        }, ot.prototype._$F0 = function (t) {
          this._$4S = t._$nP()
        }, ot.prototype._$Ks = function (t) {
          this._$4S.push(t)
        }, nt.tr = new gt(), nt._$50 = new gt(), nt._$Ti = new Array(0, 0), nt._$Pi = new Array(0, 0), nt._$B = new Array(0, 0), nt.prototype._$lP = function (t, i, e, r) {
          this.viewport = new Array(t, i, e, r)
        }, nt.prototype._$bL = function () {
          this.context.save()
          var t = this.viewport
          t != null && (this.context.beginPath(), this.context._$Li(t[0], t[1], t[2], t[3]), this.context.clip())
        }, nt.prototype._$ei = function () {
          this.context.restore()
        }, nt.prototype.drawElements = function (t, i, e, r, o, n, s, a) {
          try {
            o != this._$Qo && (this._$Qo = o, this.context.globalAlpha = o)
            for (var h = i.length, l = t.width, $ = t.height, u = this.context, p = this._$xP, f = this._$uP, c = this._$6r, d = this._$3r, g = nt.tr, y = nt._$Ti, m = nt._$Pi, T = nt._$B, P = 0; P < h; P += 3) {
              u.save()
              var S = i[P]
              var v = i[P + 1]
              var L = i[P + 2]
              var M = p + c * e[2 * S]
              var E = f + d * e[2 * S + 1]
              var A = p + c * e[2 * v]
              var I = f + d * e[2 * v + 1]
              var w = p + c * e[2 * L]
              var x = f + d * e[2 * L + 1]
              s && (s._$PS(M, E, T), M = T[0], E = T[1], s._$PS(A, I, T), A = T[0], I = T[1], s._$PS(w, x, T), w = T[0], x = T[1])
              var O = l * r[2 * S]
              var D = $ - $ * r[2 * S + 1]
              var R = l * r[2 * v]
              var b = $ - $ * r[2 * v + 1]
              var F = l * r[2 * L]
              var C = $ - $ * r[2 * L + 1]
              var N = Math.atan2(b - D, R - O)
              var B = Math.atan2(I - E, A - M)
              var U = A - M
              var G = I - E
              var Y = Math.sqrt(U * U + G * G)
              var k = R - O
              var V = b - D
              var X = Math.sqrt(k * k + V * V)
              var z = Y / X
              It._$ni(F, C, O, D, R - O, b - D, -(b - D), R - O, y), It._$ni(w, x, M, E, A - M, I - E, -(I - E), A - M, m)
              var H = (m[0] - y[0]) / y[1]
              var W = Math.min(O, R, F)
              var j = Math.max(O, R, F)
              var q = Math.min(D, b, C)
              var J = Math.max(D, b, C)
              var Q = Math.floor(W)
              var Z = Math.floor(q)
              var K = Math.ceil(j)
              var tt = Math.ceil(J)
              g.identity(), g.translate(M, E), g.rotate(B), g.scale(1, m[1] / y[1]), g.shear(H, 0), g.scale(z, z), g.rotate(-N), g.translate(-O, -D), g.setContext(u)
              if (n || (n = 1.2), at.IGNORE_EXPAND && (n = 0), at.USE_CACHED_POLYGON_IMAGE) {
                var it = a._$e0
                if (it.gl_cacheImage = it.gl_cacheImage || {}, !it.gl_cacheImage[P]) {
                  var et = nt.createCanvas(K - Q, tt - Z)
                  at.DEBUG_DATA.LDGL_CANVAS_MB = at.DEBUG_DATA.LDGL_CANVAS_MB || 0, at.DEBUG_DATA.LDGL_CANVAS_MB += (K - Q) * (tt - Z) * 4
                  var rt = et.getContext('2d')
                  rt.translate(-Q, -Z), nt.clip(rt, g, n, Y, O, D, R, b, F, C, M, E, A, I, w, x), rt.drawImage(t, 0, 0), it.gl_cacheImage[P] = {
                    cacheCanvas: et,
                    cacheContext: rt
                  }
                }
                u.drawImage(it.gl_cacheImage[P].cacheCanvas, Q, Z)
              } else at.IGNORE_CLIP || nt.clip(u, g, n, Y, O, D, R, b, F, C, M, E, A, I, w, x), at.USE_ADJUST_TRANSLATION && (W = 0, j = l, q = 0, J = $), u.drawImage(t, W, q, j - W, J - q, W, q, j - W, J - q)
              u.restore()
            }
          } catch (t) {
            _._$Rb(t)
          }
        }, nt.clip = function (t, i, e, r, o, n, s, _, a, h, l, $, u, p, f, c) {
          e > 0.02 ? nt.expandClip(t, i, e, r, l, $, u, p, f, c) : nt.clipWithTransform(t, null, o, n, s, _, a, h)
        }, nt.expandClip = function (t, i, e, r, o, n, s, _, a, h) {
          var l = s - o
          var $ = _ - n
          var u = a - o
          var p = h - n
          var f = l * p - $ * u > 0 ? e : -e
          var c = -$
          var d = l
          var g = a - s
          var y = h - _
          var m = -y
          var T = g
          var P = Math.sqrt(g * g + y * y)
          var S = -p
          var v = u
          var L = Math.sqrt(u * u + p * p)
          var M = o - f * c / r
          var E = n - f * d / r
          var A = s - f * c / r
          var I = _ - f * d / r
          var w = s - f * m / P
          var x = _ - f * T / P
          var O = a - f * m / P
          var D = h - f * T / P
          var R = o + f * S / L
          var b = n + f * v / L
          var F = a + f * S / L
          var C = h + f * v / L
          var N = nt._$50
          return i._$P2(N) != null && (nt.clipWithTransform(t, N, M, E, A, I, w, x, O, D, F, C, R, b), !0)
        }, nt.clipWithTransform = function (t, i, e, r, o, n, s, a) {
          if (arguments.length < 7) return void _._$li('err : @LDGL.clip()')
          if (!(arguments[1] instanceof gt)) return void _._$li('err : a[0] is _$6 LDTransform @LDGL.clip()')
          var h = nt._$B
          var l = i
          var $ = arguments
          if (t.beginPath(), l) {
            l._$PS($[2], $[3], h), t.moveTo(h[0], h[1])
            for (var u = 4; u < $.length; u += 2) l._$PS($[u], $[u + 1], h), t.lineTo(h[0], h[1])
          } else {
            t.moveTo($[2], $[3])
            for (var u = 4; u < $.length; u += 2) t.lineTo($[u], $[u + 1])
          }
          t.clip()
        }, nt.createCanvas = function (t, i) {
          var e = document.createElement('canvas')
          return e.setAttribute('width', t), e.setAttribute('height', i), e || _._$li('err : ' + e), e
        }, nt.dumpValues = function () {
          for (var t = '', i = 0; i < arguments.length; i++) t += '[' + i + ']= ' + arguments[i].toFixed(3) + ' , '
          console.log(t)
        }, st.prototype._$F0 = function (t) {
          this._$TT = t._$_T(), this._$LT = t._$_T(), this._$FS = t._$_T(), this._$wL = t._$nP()
        }, st.prototype.getMinValue = function () {
          return this._$TT
        }, st.prototype.getMaxValue = function () {
          return this._$LT
        }, st.prototype.getDefaultValue = function () {
          return this._$FS
        }, st.prototype.getParamID = function () {
          return this._$wL
        }, _t.prototype._$yo = function () {
          return this._$AT && !this._$JS
        }, _t.prototype._$hS = function (t) {
          this._$AT = t
        }, _t.prototype._$GT = function () {
          return this._$e0
        }, _t.prototype._$l2 = function (t) {
          this._$IP = t
        }, _t.prototype.getPartsIndex = function () {
          return this._$IP
        }, _t.prototype._$x2 = function () {
          return this._$JS
        }, _t.prototype._$Ib = function (t) {
          this._$JS = t
        }, _t.prototype.getTotalScale = function () {
          return this.totalScale
        }, _t.prototype.setTotalScale_notForClient = function (t) {
          this.totalScale = t
        }, _t.prototype.getInterpolatedOpacity = function () {
          return this._$7s
        }, _t.prototype.setInterpolatedOpacity = function (t) {
          this._$7s = t
        }, _t.prototype.getTotalOpacity = function (t) {
          return this.totalOpacity
        }, _t.prototype.setTotalOpacity = function (t) {
          this.totalOpacity = t
        }, at._$2s = '2.1.00_1', at._$Kr = 201001e3, at._$sP = !0, at._$so = !0, at._$cb = !1, at._$3T = !0, at._$Ts = !0, at._$fb = !0, at._$ts = !0, at.L2D_DEFORMER_EXTEND = !0, at._$Wb = !1
        at._$yr = !1, at._$Zs = !1, at.L2D_NO_ERROR = 0, at._$i7 = 1e3, at._$9s = 1001, at._$es = 1100, at._$r7 = 2e3, at._$07 = 2001, at._$b7 = 2002, at._$H7 = 4e3, at.L2D_COLOR_BLEND_MODE_MULT = 0, at.L2D_COLOR_BLEND_MODE_ADD = 1, at.L2D_COLOR_BLEND_MODE_INTERPOLATE = 2, at._$6b = !0, at._$cT = 0, at.clippingMaskBufferSize = 256, at.glContext = new Array(), at.frameBuffers = new Array(), at.fTexture = new Array(), at.IGNORE_CLIP = !1, at.IGNORE_EXPAND = !1, at.EXPAND_W = 2, at.USE_ADJUST_TRANSLATION = !0, at.USE_CANVAS_TRANSFORM = !0, at.USE_CACHED_POLYGON_IMAGE = !1, at.DEBUG_DATA = {}, at.PROFILE_IOS_SPEED = {
          PROFILE_NAME: 'iOS Speed',
          USE_ADJUST_TRANSLATION: !0,
          USE_CACHED_POLYGON_IMAGE: !0,
          EXPAND_W: 4
        }, at.PROFILE_IOS_QUALITY = {
          PROFILE_NAME: 'iOS HiQ',
          USE_ADJUST_TRANSLATION: !0,
          USE_CACHED_POLYGON_IMAGE: !1,
          EXPAND_W: 2
        }, at.PROFILE_IOS_DEFAULT = at.PROFILE_IOS_QUALITY, at.PROFILE_ANDROID = {
          PROFILE_NAME: 'Android',
          USE_ADJUST_TRANSLATION: !1,
          USE_CACHED_POLYGON_IMAGE: !1,
          EXPAND_W: 2
        }, at.PROFILE_DESKTOP = {
          PROFILE_NAME: 'Desktop',
          USE_ADJUST_TRANSLATION: !1,
          USE_CACHED_POLYGON_IMAGE: !1,
          EXPAND_W: 2
        }, at.initProfile = function () {
          Et.isIOS() ? at.setupProfile(at.PROFILE_IOS_DEFAULT) : Et.isAndroid() ? at.setupProfile(at.PROFILE_ANDROID) : at.setupProfile(at.PROFILE_DESKTOP)
        }, at.setupProfile = function (t, i) {
          if (typeof t === 'number') {
            switch (t) {
              case 9901:
                t = at.PROFILE_IOS_SPEED
                break
              case 9902:
                t = at.PROFILE_IOS_QUALITY
                break
              case 9903:
                t = at.PROFILE_IOS_DEFAULT
                break
              case 9904:
                t = at.PROFILE_ANDROID
                break
              case 9905:
                t = at.PROFILE_DESKTOP
                break
              default:
                alert('profile _$6 _$Ui : ' + t)
            }
          }
          arguments.length < 2 && (i = !0), i && console.log('profile : ' + t.PROFILE_NAME)
          for (var e in t) at[e] = t[e], i && console.log('  [' + e + '] = ' + t[e])
        }, at.init = function () {
          if (at._$6b) {
            console.log('Live2D %s', at._$2s), at._$6b = !1
            !0, at.initProfile()
          }
        }, at.getVersionStr = function () {
          return at._$2s
        }, at.getVersionNo = function () {
          return at._$Kr
        }, at._$sT = function (t) {
          at._$cT = t
        }, at.getError = function () {
          var t = at._$cT
          return at._$cT = 0, t
        }, at.dispose = function () {
          at.glContext = [], at.frameBuffers = [], at.fTexture = []
        }, at.setGL = function (t, i) {
          var e = i || 0
          at.glContext[e] = t
        }, at.getGL = function (t) {
          return at.glContext[t]
        }, at.setClippingMaskBufferSize = function (t) {
          at.clippingMaskBufferSize = t
        }, at.getClippingMaskBufferSize = function () {
          return at.clippingMaskBufferSize
        }, at.deleteBuffer = function (t) {
          at.getGL(t).deleteFramebuffer(at.frameBuffers[t].framebuffer), delete at.frameBuffers[t], delete at.glContext[t]
        }, ht._$r2 = function (t) {
          return t < 0 ? 0 : t > 1 ? 1 : 0.5 - 0.5 * Math.cos(t * Lt.PI_F)
        }, lt._$fr = -1, lt.prototype.toString = function () {
          return this._$ib
        }, $t.prototype = new W(), $t._$42 = 0, $t._$Os = 30, $t._$ms = 0, $t._$ns = 1, $t._$_s = 2, $t._$gT = new Array(), $t.prototype._$_S = function (t) {
          this._$LP = t
        }, $t.prototype.getTextureNo = function () {
          return this._$LP
        }, $t.prototype._$ZL = function () {
          return this._$Qi
        }, $t.prototype._$H2 = function () {
          return this._$JP
        }, $t.prototype.getNumPoints = function () {
          return this._$d0
        }, $t.prototype.getType = function () {
          return W._$wb
        }, $t.prototype._$B2 = function (t, i, e) {
          var r = i
          var o = r._$hr != null ? r._$hr : r._$Cr
          switch (U._$do) {
            default:
            case U._$Ms:
              throw new Error('_$L _$ro ')
            case U._$Qs:
              for (var n = this._$d0 - 1; n >= 0; --n) o[n * U._$No + 4] = e
          }
        }, $t.prototype._$zP = function () {
          this._$GS = new D(), this._$GS._$zP()
        }, $t.prototype._$F0 = function (t) {
          W.prototype._$F0.call(this, t), this._$LP = t._$6L(), this._$d0 = t._$6L(), this._$Yo = t._$6L()
          var i = t._$nP()
          this._$BP = new Int16Array(3 * this._$Yo)
          for (var e = 3 * this._$Yo - 1; e >= 0; --e) this._$BP[e] = i[e]
          if (this._$Eo = t._$nP(), this._$Qi = t._$nP(), t.getFormatVersion() >= G._$s7) {
            if (this._$JP = t._$6L(), this._$JP != 0) {
              if ((1 & this._$JP) != 0) {
                var r = t._$6L()
                this._$5P == null && (this._$5P = new Object()), this._$5P._$Hb = parseInt(r)
              }
              (this._$JP & $t._$Os) != 0 ? this._$6s = (this._$JP & $t._$Os) >> 1 : this._$6s = $t._$ms, (32 & this._$JP) != 0 && (this.culling = !1)
            }
          } else this._$JP = 0
        }, $t.prototype.init = function (t) {
          var i = new ut(this)
          var e = this._$d0 * U._$No
          var r = this._$32()
          switch (i._$Cr != null && (i._$Cr = null), i._$Cr = new Float32Array(e), i._$hr != null && (i._$hr = null), i._$hr = r ? new Float32Array(e) : null, U._$do) {
            default:
            case U._$Ms:
              if (U._$Ls) {
                for (var o = this._$d0 - 1; o >= 0; --o) {
                  var n = o << 1
                  this._$Qi[n + 1] = 1 - this._$Qi[n + 1]
                }
              }
              break
            case U._$Qs:
              for (var o = this._$d0 - 1; o >= 0; --o) {
                var n = o << 1
                var s = o * U._$No
                var _ = this._$Qi[n]
                var a = this._$Qi[n + 1]
                i._$Cr[s] = _, i._$Cr[s + 1] = a, i._$Cr[s + 4] = 0, r && (i._$hr[s] = _, i._$hr[s + 1] = a, i._$hr[s + 4] = 0)
              }
          }
          return i
        }, $t.prototype._$Nr = function (t, i) {
          var e = i
          if (this != e._$GT() && console.log('### assert!! ### '), this._$GS._$Ur(t) && (W.prototype._$Nr.call(this, t, e), !e._$IS[0])) {
            var r = $t._$gT
            r[0] = !1, v._$Vr(t, this._$GS, r, this._$d0, this._$Eo, e._$Cr, U._$i2, U._$No)
          }
        }, $t.prototype._$2b = function (t, i) {
          try {
            this != i._$GT() && console.log('### assert!! ### ')
            var e = !1
            i._$IS[0] && (e = !0)
            var r = i
            if (!e && (W.prototype._$2b.call(this, t), this._$32())) {
              var o = this.getTargetBaseDataID()
              if (r._$8r == W._$ur && (r._$8r = t.getBaseDataIndex(o)), r._$8r < 0) at._$so && _._$li('_$L _$0P _$G :: %s', o)
              else {
                var n = t.getBaseData(r._$8r)
                var s = t._$q2(r._$8r)
                n == null || s._$x2() ? r._$AT = !1 : (n._$nb(t, s, r._$Cr, r._$hr, this._$d0, U._$i2, U._$No), r._$AT = !0), r.baseOpacity = s.getTotalOpacity()
              }
            }
          } catch (t) {
            throw t
          }
        }, $t.prototype.draw = function (t, i, e) {
          if (this != e._$GT() && console.log('### assert!! ### '), !e._$IS[0]) {
            var r = e
            var o = this._$LP
            o < 0 && (o = 1)
            var n = this.getOpacity(i, r) * e._$VS * e.baseOpacity
            var s = r._$hr != null ? r._$hr : r._$Cr
            t.setClipBufPre_clipContextForDraw(e.clipBufPre_clipContext), t._$WP(this.culling), t._$Uo(o, 3 * this._$Yo, this._$BP, s, this._$Qi, n, this._$6s, r)
          }
        }, $t.prototype.dump = function () {
          console.log('  _$yi( %d ) , _$d0( %d ) , _$Yo( %d ) \n', this._$LP, this._$d0, this._$Yo), console.log('  _$Oi _$di = { ')
          for (var t = 0; t < this._$BP.length; t++) console.log('%5d ,', this._$BP[t])
          console.log('\n  _$5i _$30')
          for (var t = 0; t < this._$Eo.length; t++) {
            console.log('\n    _$30[%d] = ', t)
            for (var i = this._$Eo[t], e = 0; e < i.length; e++) console.log('%6.2f, ', i[e])
          }
          console.log('\n')
        }, $t.prototype._$72 = function (t) {
          return this._$5P == null ? null : this._$5P[t]
        }, $t.prototype.getIndexArray = function () {
          return this._$BP
        }, ut.prototype = new Mt(), ut.prototype.getTransformedPoints = function () {
          return this._$hr != null ? this._$hr : this._$Cr
        }, pt.prototype._$HT = function (t) {
          this.x = t.x, this.y = t.y
        }, pt.prototype._$HT = function (t, i) {
          this.x = t, this.y = i
        }, ft.prototype = new i(), ft.loadModel = function (t) {
          var e = new ft()
          return i._$62(e, t), e
        }, ft.loadModel = function (t, e) {
          var r = e || 0
          var o = new ft(r)
          return i._$62(o, t), o
        }, ft._$to = function () {
          return new ft()
        }, ft._$er = function (t) {
          var i = new _$5('../_$_r/_$t0/_$Ri/_$_P._$d')
          if (i.exists() == 0) throw new _$ls('_$t0 _$_ _$6 _$Ui :: ' + i._$PL())
          for (var e = ['../_$_r/_$t0/_$Ri/_$_P.512/_$CP._$1', '../_$_r/_$t0/_$Ri/_$_P.512/_$vP._$1', '../_$_r/_$t0/_$Ri/_$_P.512/_$EP._$1', '../_$_r/_$t0/_$Ri/_$_P.512/_$pP._$1'], r = ft.loadModel(i._$3b()), o = 0; o < e.length; o++) {
            var n = new _$5(e[o])
            if (n.exists() == 0) throw new _$ls('_$t0 _$_ _$6 _$Ui :: ' + n._$PL())
            r.setTexture(o, _$nL._$_o(t, n._$3b()))
          }
          return r
        }, ft.prototype.setGL = function (t) {
          at.setGL(t)
        }, ft.prototype.setTransform = function (t) {
          this.drawParamWebGL.setTransform(t)
        }, ft.prototype.update = function () {
          this._$5S.update(), this._$5S.preDraw(this.drawParamWebGL)
        }, ft.prototype.draw = function () {
          this._$5S.draw(this.drawParamWebGL)
        }, ft.prototype._$K2 = function () {
          this.drawParamWebGL._$K2()
        }, ft.prototype.setTexture = function (t, i) {
          this.drawParamWebGL == null && _._$li('_$Yi for QT _$ki / _$XS() is _$6 _$ui!!'), this.drawParamWebGL.setTexture(t, i)
        }, ft.prototype.setTexture = function (t, i) {
          this.drawParamWebGL == null && _._$li('_$Yi for QT _$ki / _$XS() is _$6 _$ui!!'), this.drawParamWebGL.setTexture(t, i)
        }, ft.prototype._$Rs = function () {
          return this.drawParamWebGL._$Rs()
        }, ft.prototype._$Ds = function (t) {
          this.drawParamWebGL._$Ds(t)
        }, ft.prototype.getDrawParam = function () {
          return this.drawParamWebGL
        }, ft.prototype.setMatrix = function (t) {
          this.drawParamWebGL.setMatrix(t)
        }, ft.prototype.setPremultipliedAlpha = function (t) {
          this.drawParamWebGL.setPremultipliedAlpha(t)
        }, ft.prototype.isPremultipliedAlpha = function () {
          return this.drawParamWebGL.isPremultipliedAlpha()
        }, ft.prototype.setAnisotropy = function (t) {
          this.drawParamWebGL.setAnisotropy(t)
        }, ft.prototype.getAnisotropy = function () {
          return this.drawParamWebGL.getAnisotropy()
        }, ct.prototype._$tb = function () {
          return this.motions
        }, ct.prototype.startMotion = function (t, i) {
          for (var e = null, r = this.motions.length, o = 0; o < r; ++o) (e = this.motions[o]) != null && (e._$qS(e._$w0.getFadeOut()), this._$eb && _._$Ji('MotionQueueManager[size:%2d]->startMotion() / start _$K _$3 (m%d)\n', r, e._$sr))
          if (t == null) return -1
          e = new dt(), e._$w0 = t, this.motions.push(e)
          var n = e._$sr
          return this._$eb && _._$Ji('MotionQueueManager[size:%2d]->startMotion() / new _$w0 (m%d)\n', r, n), n
        }, ct.prototype.updateParam = function (t) {
          try {
            for (var i = !1, e = 0; e < this.motions.length; e++) {
              var r = this.motions[e]
              if (r != null) {
                var o = r._$w0
                o != null ? (o.updateParam(t, r), i = !0, r.isFinished() && (this._$eb && _._$Ji('MotionQueueManager[size:%2d]->updateParam() / _$T0 _$w0 (m%d)\n', this.motions.length - 1, r._$sr), this.motions.splice(e, 1), e--)) : (this.motions = this.motions.splice(e, 1), e--)
              } else this.motions.splice(e, 1), e--
            }
            return i
          } catch (t) {
            return _._$li(t), !0
          }
        }, ct.prototype.isFinished = function (t) {
          if (arguments.length >= 1) {
            for (var i = 0; i < this.motions.length; i++) {
              var e = this.motions[i]
              if (e != null && (e._$sr == t && !e.isFinished())) return !1
            }
            return !0
          }
          for (var i = 0; i < this.motions.length; i++) {
            var e = this.motions[i]
            if (e != null) {
              if (e._$w0 != null) {
                if (!e.isFinished()) return !1
              } else this.motions.splice(i, 1), i--
            } else this.motions.splice(i, 1), i--
          }
          return !0
        }, ct.prototype.stopAllMotions = function () {
          for (var t = 0; t < this.motions.length; t++) {
            var i = this.motions[t]
            if (i != null) {
              i._$w0
              this.motions.splice(t, 1), t--
            } else this.motions.splice(t, 1), t--
          }
        }, ct.prototype._$Zr = function (t) {
          this._$eb = t
        }, ct.prototype._$e = function () {
          console.log('-- _$R --\n')
          for (var t = 0; t < this.motions.length; t++) {
            var i = this.motions[t]
            var e = i._$w0
            console.log('MotionQueueEnt[%d] :: %s\n', this.motions.length, e.toString())
          }
        }, dt._$Gs = 0, dt.prototype.isFinished = function () {
          return this._$9L
        }, dt.prototype._$qS = function (t) {
          var i = w.getUserTimeMSec()
          var e = i + t;
          (this._$Do < 0 || e < this._$Do) && (this._$Do = e)
        }, dt.prototype._$Bs = function () {
          return this._$sr
        }, gt.prototype.setContext = function (t) {
          var i = this.m
          t.transform(i[0], i[1], i[3], i[4], i[6], i[7])
        }, gt.prototype.toString = function () {
          for (var t = 'LDTransform { ', i = 0; i < 9; i++) t += this.m[i].toFixed(2) + ' ,'
          return t += ' }'
        }, gt.prototype.identity = function () {
          var t = this.m
          t[0] = t[4] = t[8] = 1, t[1] = t[2] = t[3] = t[5] = t[6] = t[7] = 0
        }, gt.prototype._$PS = function (t, i, e) {
          e == null && (e = new Array(0, 0))
          var r = this.m
          return e[0] = r[0] * t + r[3] * i + r[6], e[1] = r[1] * t + r[4] * i + r[7], e
        }, gt.prototype._$P2 = function (t) {
          t || (t = new gt())
          var i = this.m
          var e = i[0]
          var r = i[1]
          var o = i[2]
          var n = i[3]
          var s = i[4]
          var _ = i[5]
          var a = i[6]
          var h = i[7]
          var l = i[8]
          var $ = e * s * l + r * _ * a + o * n * h - e * _ * h - o * s * a - r * n * l
          if ($ == 0) return null
          var u = 1 / $
          return t.m[0] = u * (s * l - h * _), t.m[1] = u * (h * o - r * l), t.m[2] = u * (r * _ - s * o), t.m[3] = u * (a * _ - n * l), t.m[4] = u * (e * l - a * o), t.m[5] = u * (n * o - e * _), t.m[6] = u * (n * h - a * s), t.m[7] = u * (a * r - e * h), t.m[8] = u * (e * s - n * r), t
        }, gt.prototype.transform = function (t, i, e) {
          e == null && (e = new Array(0, 0))
          var r = this.m
          return e[0] = r[0] * t + r[3] * i + r[6], e[1] = r[1] * t + r[4] * i + r[7], e
        }, gt.prototype.translate = function (t, i) {
          var e = this.m
          e[6] = e[0] * t + e[3] * i + e[6], e[7] = e[1] * t + e[4] * i + e[7], e[8] = e[2] * t + e[5] * i + e[8]
        }, gt.prototype.scale = function (t, i) {
          var e = this.m
          e[0] *= t, e[1] *= t, e[2] *= t, e[3] *= i, e[4] *= i, e[5] *= i
        }, gt.prototype.shear = function (t, i) {
          var e = this.m
          var r = e[0] + e[3] * i
          var o = e[1] + e[4] * i
          var n = e[2] + e[5] * i
          e[3] = e[0] * t + e[3], e[4] = e[1] * t + e[4], e[5] = e[2] * t + e[5], e[0] = r, e[1] = o, e[2] = n
        }, gt.prototype.rotate = function (t) {
          var i = this.m
          var e = Math.cos(t)
          var r = Math.sin(t)
          var o = i[0] * e + i[3] * r
          var n = i[1] * e + i[4] * r
          var s = i[2] * e + i[5] * r
          i[3] = -i[0] * r + i[3] * e, i[4] = -i[1] * r + i[4] * e, i[5] = -i[2] * r + i[5] * e, i[0] = o, i[1] = n, i[2] = s
        }, gt.prototype.concatenate = function (t) {
          var i = this.m
          var e = t.m
          var r = i[0] * e[0] + i[3] * e[1] + i[6] * e[2]
          var o = i[1] * e[0] + i[4] * e[1] + i[7] * e[2]
          var n = i[2] * e[0] + i[5] * e[1] + i[8] * e[2]
          var s = i[0] * e[3] + i[3] * e[4] + i[6] * e[5]
          var _ = i[1] * e[3] + i[4] * e[4] + i[7] * e[5]
          var a = i[2] * e[3] + i[5] * e[4] + i[8] * e[5]
          var h = i[0] * e[6] + i[3] * e[7] + i[6] * e[8]
          var l = i[1] * e[6] + i[4] * e[7] + i[7] * e[8]
          var $ = i[2] * e[6] + i[5] * e[7] + i[8] * e[8]
          m[0] = r, m[1] = o, m[2] = n, m[3] = s, m[4] = _, m[5] = a, m[6] = h, m[7] = l, m[8] = $
        }, yt.prototype = new et(), yt._$eT = null, yt._$tP = new Object(), yt._$2o = function () {
          return yt._$eT == null && (yt._$eT = yt.getID('DST_BASE')), yt._$eT
        }, yt._$27 = function () {
          yt._$tP.clear(), yt._$eT = null
        }, yt.getID = function (t) {
          var i = yt._$tP[t]
          return i == null && (i = new yt(t), yt._$tP[t] = i), i
        }, yt.prototype._$3s = function () {
          return new yt()
        }, mt.prototype = new E(), mt._$9r = function (t) {
          return new Float32Array(t)
        }, mt._$vb = function (t) {
          return new Int16Array(t)
        }, mt._$cr = function (t, i) {
          return t == null || t._$yL() < i.length ? (t = mt._$9r(2 * i.length), t.put(i), t._$oT(0)) : (t.clear(), t.put(i), t._$oT(0)), t
        }, mt._$mb = function (t, i) {
          return t == null || t._$yL() < i.length ? (t = mt._$vb(2 * i.length), t.put(i), t._$oT(0)) : (t.clear(), t.put(i), t._$oT(0)), t
        }, mt._$Hs = function () {
          return this._$Gr
        }, mt._$as = function (t) {
          this._$Gr = t
        }, mt.prototype.getGL = function () {
          return this.gl
        }, mt.prototype.setGL = function (t) {
          this.gl = t
        }, mt.prototype.setTransform = function (t) {
          this.transform = t
        }, mt.prototype._$ZT = function () {
          var t = this.gl
          this.firstDraw && (this.initShader(), this.firstDraw = !1, this.anisotropyExt = t.getExtension('EXT_texture_filter_anisotropic') || t.getExtension('WEBKIT_EXT_texture_filter_anisotropic') || t.getExtension('MOZ_EXT_texture_filter_anisotropic'), this.anisotropyExt && (this.maxAnisotropy = t.getParameter(this.anisotropyExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT))), t.disable(t.SCISSOR_TEST), t.disable(t.STENCIL_TEST), t.disable(t.DEPTH_TEST), t.frontFace(t.CW), t.enable(t.BLEND), t.colorMask(1, 1, 1, 1), t.bindBuffer(t.ARRAY_BUFFER, null), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null)
        }, mt.prototype._$Uo = function (t, i, e, r, o, n, s, _) {
          if (!(n < 0.01 && this.clipBufPre_clipContextMask == null)) {
            var a = (n > 0.9 && at.EXPAND_W, this.gl)
            if (this.gl == null) throw new Error('gl is null')
            var h = 1 * this._$C0 * n
            var l = 1 * this._$tT * n
            var $ = 1 * this._$WL * n
            var u = this._$lT * n
            if (this.clipBufPre_clipContextMask != null) {
              a.frontFace(a.CCW), a.useProgram(this.shaderProgram), this._$vS = Tt(a, this._$vS, r), this._$no = Pt(a, this._$no, e), a.enableVertexAttribArray(this.a_position_Loc), a.vertexAttribPointer(this.a_position_Loc, 2, a.FLOAT, !1, 0, 0), this._$NT = Tt(a, this._$NT, o), a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, this.textures[t]), a.uniform1i(this.s_texture0_Loc, 1), a.enableVertexAttribArray(this.a_texCoord_Loc), a.vertexAttribPointer(this.a_texCoord_Loc, 2, a.FLOAT, !1, 0, 0), a.uniformMatrix4fv(this.u_matrix_Loc, !1, this.getClipBufPre_clipContextMask().matrixForMask)
              var p = this.getClipBufPre_clipContextMask().layoutChannelNo
              var f = this.getChannelFlagAsColor(p)
              a.uniform4f(this.u_channelFlag, f.r, f.g, f.b, f.a)
              var c = this.getClipBufPre_clipContextMask().layoutBounds
              a.uniform4f(this.u_baseColor_Loc, 2 * c.x - 1, 2 * c.y - 1, 2 * c._$EL() - 1, 2 * c._$5T() - 1), a.uniform1i(this.u_maskFlag_Loc, !0)
            } else if (this.getClipBufPre_clipContextDraw() != null) {
              a.useProgram(this.shaderProgramOff), this._$vS = Tt(a, this._$vS, r), this._$no = Pt(a, this._$no, e), a.enableVertexAttribArray(this.a_position_Loc_Off), a.vertexAttribPointer(this.a_position_Loc_Off, 2, a.FLOAT, !1, 0, 0), this._$NT = Tt(a, this._$NT, o), a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, this.textures[t]), a.uniform1i(this.s_texture0_Loc_Off, 1), a.enableVertexAttribArray(this.a_texCoord_Loc_Off), a.vertexAttribPointer(this.a_texCoord_Loc_Off, 2, a.FLOAT, !1, 0, 0), a.uniformMatrix4fv(this.u_clipMatrix_Loc_Off, !1, this.getClipBufPre_clipContextDraw().matrixForDraw), a.uniformMatrix4fv(this.u_matrix_Loc_Off, !1, this.matrix4x4), a.activeTexture(a.TEXTURE2), a.bindTexture(a.TEXTURE_2D, at.fTexture[this.glno]), a.uniform1i(this.s_texture1_Loc_Off, 2)
              var p = this.getClipBufPre_clipContextDraw().layoutChannelNo
              var f = this.getChannelFlagAsColor(p)
              a.uniform4f(this.u_channelFlag_Loc_Off, f.r, f.g, f.b, f.a), a.uniform4f(this.u_baseColor_Loc_Off, h, l, $, u)
            } else a.useProgram(this.shaderProgram), this._$vS = Tt(a, this._$vS, r), this._$no = Pt(a, this._$no, e), a.enableVertexAttribArray(this.a_position_Loc), a.vertexAttribPointer(this.a_position_Loc, 2, a.FLOAT, !1, 0, 0), this._$NT = Tt(a, this._$NT, o), a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, this.textures[t]), a.uniform1i(this.s_texture0_Loc, 1), a.enableVertexAttribArray(this.a_texCoord_Loc), a.vertexAttribPointer(this.a_texCoord_Loc, 2, a.FLOAT, !1, 0, 0), a.uniformMatrix4fv(this.u_matrix_Loc, !1, this.matrix4x4), a.uniform4f(this.u_baseColor_Loc, h, l, $, u), a.uniform1i(this.u_maskFlag_Loc, !1)
            this.culling ? this.gl.enable(a.CULL_FACE) : this.gl.disable(a.CULL_FACE), this.gl.enable(a.BLEND)
            var d, g, y, m
            if (this.clipBufPre_clipContextMask != null) d = a.ONE, g = a.ONE_MINUS_SRC_ALPHA, y = a.ONE, m = a.ONE_MINUS_SRC_ALPHA
            else {
              switch (s) {
                case $t._$ms:
                  d = a.ONE, g = a.ONE_MINUS_SRC_ALPHA, y = a.ONE, m = a.ONE_MINUS_SRC_ALPHA
                  break
                case $t._$ns:
                  d = a.ONE, g = a.ONE, y = a.ZERO, m = a.ONE
                  break
                case $t._$_s:
                  d = a.DST_COLOR, g = a.ONE_MINUS_SRC_ALPHA, y = a.ZERO, m = a.ONE
              }
            }
            a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD), a.blendFuncSeparate(d, g, y, m), this.anisotropyExt && a.texParameteri(a.TEXTURE_2D, this.anisotropyExt.TEXTURE_MAX_ANISOTROPY_EXT, this.maxAnisotropy)
            var T = e.length
            a.drawElements(a.TRIANGLES, T, a.UNSIGNED_SHORT, 0), a.bindTexture(a.TEXTURE_2D, null)
          }
        }, mt.prototype._$Rs = function () {
          throw new Error('_$Rs')
        }, mt.prototype._$Ds = function (t) {
          throw new Error('_$Ds')
        }, mt.prototype._$K2 = function () {
          for (var t = 0; t < this.textures.length; t++) {
            this.textures[t] != 0 && (this.gl._$K2(1, this.textures, t), this.textures[t] = null)
          }
        }, mt.prototype.setTexture = function (t, i) {
          this.textures[t] = i
        }, mt.prototype.initShader = function () {
          var t = this.gl
          this.loadShaders2(), this.a_position_Loc = t.getAttribLocation(this.shaderProgram, 'a_position'), this.a_texCoord_Loc = t.getAttribLocation(this.shaderProgram, 'a_texCoord'), this.u_matrix_Loc = t.getUniformLocation(this.shaderProgram, 'u_mvpMatrix'), this.s_texture0_Loc = t.getUniformLocation(this.shaderProgram, 's_texture0'), this.u_channelFlag = t.getUniformLocation(this.shaderProgram, 'u_channelFlag'), this.u_baseColor_Loc = t.getUniformLocation(this.shaderProgram, 'u_baseColor'), this.u_maskFlag_Loc = t.getUniformLocation(this.shaderProgram, 'u_maskFlag'), this.a_position_Loc_Off = t.getAttribLocation(this.shaderProgramOff, 'a_position'), this.a_texCoord_Loc_Off = t.getAttribLocation(this.shaderProgramOff, 'a_texCoord'), this.u_matrix_Loc_Off = t.getUniformLocation(this.shaderProgramOff, 'u_mvpMatrix'), this.u_clipMatrix_Loc_Off = t.getUniformLocation(this.shaderProgramOff, 'u_ClipMatrix'), this.s_texture0_Loc_Off = t.getUniformLocation(this.shaderProgramOff, 's_texture0'), this.s_texture1_Loc_Off = t.getUniformLocation(this.shaderProgramOff, 's_texture1'), this.u_channelFlag_Loc_Off = t.getUniformLocation(this.shaderProgramOff, 'u_channelFlag'), this.u_baseColor_Loc_Off = t.getUniformLocation(this.shaderProgramOff, 'u_baseColor')
        }, mt.prototype.disposeShader = function () {
          var t = this.gl
          this.shaderProgram && (t.deleteProgram(this.shaderProgram), this.shaderProgram = null), this.shaderProgramOff && (t.deleteProgram(this.shaderProgramOff), this.shaderProgramOff = null)
        }, mt.prototype.compileShader = function (t, i) {
          var e = this.gl
          var r = i
          var o = e.createShader(t)
          if (o == null) return _._$Ji('_$L0 to create shader'), null
          if (e.shaderSource(o, r), e.compileShader(o), !e.getShaderParameter(o, e.COMPILE_STATUS)) {
            var n = e.getShaderInfoLog(o)
            return _._$Ji('_$L0 to compile shader : ' + n), e.deleteShader(o), null
          }
          return o
        }, mt.prototype.loadShaders2 = function () {
          var t = this.gl
          if (this.shaderProgram = t.createProgram(), !this.shaderProgram) return !1
          if (this.shaderProgramOff = t.createProgram(), !this.shaderProgramOff) return !1
          if (this.vertShader = this.compileShader(t.VERTEX_SHADER, 'attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform mat4       u_mvpMatrix;void main(){    gl_Position = u_mvpMatrix * a_position;    v_ClipPos = u_mvpMatrix * a_position;    v_texCoord = a_texCoord;}'), !this.vertShader) return _._$Ji('Vertex shader compile _$li!'), !1
          if (this.vertShaderOff = this.compileShader(t.VERTEX_SHADER, 'attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform mat4       u_mvpMatrix;uniform mat4       u_ClipMatrix;void main(){    gl_Position = u_mvpMatrix * a_position;    v_ClipPos = u_ClipMatrix * a_position;    v_texCoord = a_texCoord ;}'), !this.vertShaderOff) return _._$Ji('OffVertex shader compile _$li!'), !1
          if (this.fragShader = this.compileShader(t.FRAGMENT_SHADER, 'precision mediump float;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform sampler2D  s_texture0;uniform vec4       u_channelFlag;uniform vec4       u_baseColor;uniform bool       u_maskFlag;void main(){    vec4 smpColor;     if(u_maskFlag){        float isInside =             step(u_baseColor.x, v_ClipPos.x/v_ClipPos.w)          * step(u_baseColor.y, v_ClipPos.y/v_ClipPos.w)          * step(v_ClipPos.x/v_ClipPos.w, u_baseColor.z)          * step(v_ClipPos.y/v_ClipPos.w, u_baseColor.w);        smpColor = u_channelFlag * texture2D(s_texture0 , v_texCoord).a * isInside;    }else{        smpColor = texture2D(s_texture0 , v_texCoord) * u_baseColor;    }    gl_FragColor = smpColor;}'), !this.fragShader) return _._$Ji('Fragment shader compile _$li!'), !1
          if (this.fragShaderOff = this.compileShader(t.FRAGMENT_SHADER, 'precision mediump float ;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform sampler2D  s_texture0;uniform sampler2D  s_texture1;uniform vec4       u_channelFlag;uniform vec4       u_baseColor ;void main(){    vec4 col_formask = texture2D(s_texture0, v_texCoord) * u_baseColor;    vec4 clipMask = texture2D(s_texture1, v_ClipPos.xy / v_ClipPos.w) * u_channelFlag;    float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;    col_formask = col_formask * maskVal;    gl_FragColor = col_formask;}'), !this.fragShaderOff) return _._$Ji('OffFragment shader compile _$li!'), !1
          if (t.attachShader(this.shaderProgram, this.vertShader), t.attachShader(this.shaderProgram, this.fragShader), t.attachShader(this.shaderProgramOff, this.vertShaderOff), t.attachShader(this.shaderProgramOff, this.fragShaderOff), t.linkProgram(this.shaderProgram), t.linkProgram(this.shaderProgramOff), !t.getProgramParameter(this.shaderProgram, t.LINK_STATUS)) {
            var i = t.getProgramInfoLog(this.shaderProgram)
            return _._$Ji('_$L0 to link program: ' + i), this.vertShader && (t.deleteShader(this.vertShader), this.vertShader = 0), this.fragShader && (t.deleteShader(this.fragShader), this.fragShader = 0), this.shaderProgram && (t.deleteProgram(this.shaderProgram), this.shaderProgram = 0), this.vertShaderOff && (t.deleteShader(this.vertShaderOff), this.vertShaderOff = 0), this.fragShaderOff && (t.deleteShader(this.fragShaderOff), this.fragShaderOff = 0), this.shaderProgramOff && (t.deleteProgram(this.shaderProgramOff), this.shaderProgramOff = 0), !1
          }
          return !0
        }, mt.prototype.createFramebuffer = function () {
          var t = this.gl
          var i = at.clippingMaskBufferSize
          var e = t.createFramebuffer()
          t.bindFramebuffer(t.FRAMEBUFFER, e)
          var r = t.createRenderbuffer()
          t.bindRenderbuffer(t.RENDERBUFFER, r), t.renderbufferStorage(t.RENDERBUFFER, t.RGBA4, i, i), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.RENDERBUFFER, r)
          var o = t.createTexture()
          return t.bindTexture(t.TEXTURE_2D, o), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, i, i, 0, t.RGBA, t.UNSIGNED_BYTE, null), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, o, 0), t.bindTexture(t.TEXTURE_2D, null), t.bindRenderbuffer(t.RENDERBUFFER, null), t.bindFramebuffer(t.FRAMEBUFFER, null), at.fTexture[this.glno] = o, {
            framebuffer: e,
            renderbuffer: r,
            texture: at.fTexture[this.glno]
          }
        }, St.prototype._$fP = function () {
          var t; var i; var e; var r = this._$ST()
          if ((128 & r) == 0) return 255 & r
          if ((128 & (t = this._$ST())) == 0) return (127 & r) << 7 | 127 & t
          if ((128 & (i = this._$ST())) == 0) return (127 & r) << 14 | (127 & t) << 7 | 255 & i
          if ((128 & (e = this._$ST())) == 0) return (127 & r) << 21 | (127 & t) << 14 | (127 & i) << 7 | 255 & e
          throw new lt('_$L _$0P  _')
        }, St.prototype.getFormatVersion = function () {
          return this._$S2
        }, St.prototype._$gr = function (t) {
          this._$S2 = t
        }, St.prototype._$3L = function () {
          return this._$fP()
        }, St.prototype._$mP = function () {
          return this._$zT(), this._$F += 8, this._$T.getFloat64(this._$F - 8)
        }, St.prototype._$_T = function () {
          return this._$zT(), this._$F += 4, this._$T.getFloat32(this._$F - 4)
        }, St.prototype._$6L = function () {
          return this._$zT(), this._$F += 4, this._$T.getInt32(this._$F - 4)
        }, St.prototype._$ST = function () {
          return this._$zT(), this._$T.getInt8(this._$F++)
        }, St.prototype._$9T = function () {
          return this._$zT(), this._$F += 2, this._$T.getInt16(this._$F - 2)
        }, St.prototype._$2T = function () {
          throw this._$zT(), this._$F += 8, new lt('_$L _$q read long')
        }, St.prototype._$po = function () {
          return this._$zT(), this._$T.getInt8(this._$F++) != 0
        }
        var xt = !0
        St.prototype._$bT = function () {
          this._$zT()
          var t = this._$3L()
          var i = null
          if (xt) {
            try {
              var e = new ArrayBuffer(2 * t)
              i = new Uint16Array(e)
              for (var r = 0; r < t; ++r) i[r] = this._$T.getUint8(this._$F++)
              return String.fromCharCode.apply(null, i)
            } catch (t) {
              xt = !1
            }
          }
          try {
            var o = new Array()
            if (i == null) for (var r = 0; r < t; ++r) o[r] = this._$T.getUint8(this._$F++)
            else for (var r = 0; r < t; ++r) o[r] = i[r]
            return String.fromCharCode.apply(null, o)
          } catch (t) {
            console.log('read utf8 / _$rT _$L0 !! : ' + t)
          }
        }, St.prototype._$cS = function () {
          this._$zT()
          for (var t = this._$3L(), i = new Int32Array(t), e = 0; e < t; e++) i[e] = this._$T.getInt32(this._$F), this._$F += 4
          return i
        }, St.prototype._$Tb = function () {
          this._$zT()
          for (var t = this._$3L(), i = new Float32Array(t), e = 0; e < t; e++) i[e] = this._$T.getFloat32(this._$F), this._$F += 4
          return i
        }, St.prototype._$5b = function () {
          this._$zT()
          for (var t = this._$3L(), i = new Float64Array(t), e = 0; e < t; e++) i[e] = this._$T.getFloat64(this._$F), this._$F += 8
          return i
        }, St.prototype._$nP = function () {
          return this._$Jb(-1)
        }, St.prototype._$Jb = function (t) {
          if (this._$zT(), t < 0 && (t = this._$3L()), t == G._$7P) {
            var i = this._$6L()
            if (i >= 0 && i < this._$Ko.length) return this._$Ko[i]
            throw new lt('_$sL _$4i @_$m0')
          }
          var e = this._$4b(t)
          return this._$Ko.push(e), e
        }, St.prototype._$4b = function (t) {
          if (t == 0) return null
          if (t == 50) {
            var i = this._$bT()
            var e = b.getID(i)
            return e
          }
          if (t == 51) {
            var i = this._$bT()
            var e = yt.getID(i)
            return e
          }
          if (t == 134) {
            var i = this._$bT()
            var e = l.getID(i)
            return e
          }
          if (t == 60) {
            var i = this._$bT()
            var e = u.getID(i)
            return e
          }
          if (t >= 48) {
            var r = G._$9o(t)
            return r != null ? (r._$F0(this), r) : null
          }
          switch (t) {
            case 1:
              return this._$bT()
            case 10:
              return new n(this._$6L(), !0)
            case 11:
              return new S(this._$mP(), this._$mP(), this._$mP(), this._$mP())
            case 12:
              return new S(this._$_T(), this._$_T(), this._$_T(), this._$_T())
            case 13:
              return new L(this._$mP(), this._$mP())
            case 14:
              return new L(this._$_T(), this._$_T())
            case 15:
              for (var o = this._$3L(), e = new Array(o), s = 0; s < o; s++) e[s] = this._$nP()
              return e
            case 17:
              var e = new F(this._$mP(), this._$mP(), this._$mP(), this._$mP(), this._$mP(), this._$mP())
              return e
            case 21:
              return new h(this._$6L(), this._$6L(), this._$6L(), this._$6L())
            case 22:
              return new pt(this._$6L(), this._$6L())
            case 23:
              throw new Error('_$L _$ro ')
            case 16:
            case 25:
              return this._$cS()
            case 26:
              return this._$5b()
            case 27:
              return this._$Tb()
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 18:
            case 19:
            case 20:
            case 24:
            case 28:
              throw new lt('_$6 _$q : _$nP() of 2-9 ,18,19,20,24,28 : ' + t)
            default:
              throw new lt('_$6 _$q : _$nP() NO _$i : ' + t)
          }
        }, St.prototype._$8L = function () {
          return this._$hL == 0 ? this._$v0 = this._$ST() : this._$hL == 8 && (this._$v0 = this._$ST(), this._$hL = 0), (this._$v0 >> 7 - this._$hL++ & 1) == 1
        }, St.prototype._$zT = function () {
          this._$hL != 0 && (this._$hL = 0)
        }, vt.prototype._$wP = function (t, i, e) {
          for (var r = 0; r < e; r++) {
            for (var o = 0; o < i; o++) {
              var n = 2 * (o + r * i)
              console.log('(% 7.3f , % 7.3f) , ', t[n], t[n + 1])
            }
            console.log('\n')
          }
          console.log('\n')
        }, Lt._$2S = Math.PI / 180, Lt._$bS = Math.PI / 180, Lt._$wS = 180 / Math.PI, Lt._$NS = 180 / Math.PI, Lt.PI_F = Math.PI, Lt._$kT = [0, 0.012368, 0.024734, 0.037097, 0.049454, 0.061803, 0.074143, 0.086471, 0.098786, 0.111087, 0.12337, 0.135634, 0.147877, 0.160098, 0.172295, 0.184465, 0.196606, 0.208718, 0.220798, 0.232844, 0.244854, 0.256827, 0.268761, 0.280654, 0.292503, 0.304308, 0.316066, 0.327776, 0.339436, 0.351044, 0.362598, 0.374097, 0.385538, 0.396921, 0.408243, 0.419502, 0.430697, 0.441826, 0.452888, 0.463881, 0.474802, 0.485651, 0.496425, 0.507124, 0.517745, 0.528287, 0.538748, 0.549126, 0.559421, 0.56963, 0.579752, 0.589785, 0.599728, 0.609579, 0.619337, 0.629, 0.638567, 0.648036, 0.657406, 0.666676, 0.675843, 0.684908, 0.693867, 0.70272, 0.711466, 0.720103, 0.72863, 0.737045, 0.745348, 0.753536, 0.76161, 0.769566, 0.777405, 0.785125, 0.792725, 0.800204, 0.807561, 0.814793, 0.821901, 0.828884, 0.835739, 0.842467, 0.849066, 0.855535, 0.861873, 0.868079, 0.874153, 0.880093, 0.885898, 0.891567, 0.897101, 0.902497, 0.907754, 0.912873, 0.917853, 0.922692, 0.92739, 0.931946, 0.936359, 0.940629, 0.944755, 0.948737, 0.952574, 0.956265, 0.959809, 0.963207, 0.966457, 0.96956, 0.972514, 0.97532, 0.977976, 0.980482, 0.982839, 0.985045, 0.987101, 0.989006, 0.990759, 0.992361, 0.993811, 0.995109, 0.996254, 0.997248, 0.998088, 0.998776, 0.999312, 0.999694, 0.999924, 1], Lt._$92 = function (t, i) {
          var e = Math.atan2(t[1], t[0])
          var r = Math.atan2(i[1], i[0])
          return Lt._$tS(e, r)
        }, Lt._$tS = function (t, i) {
          for (var e = t - i; e < -Math.PI;) e += 2 * Math.PI
          for (; e > Math.PI;) e -= 2 * Math.PI
          return e
        }, Lt._$9 = function (t) {
          return Math.sin(t)
        }, Lt.fcos = function (t) {
          return Math.cos(t)
        }, Mt.prototype._$u2 = function () {
          return this._$IS[0]
        }, Mt.prototype._$yo = function () {
          return this._$AT && !this._$IS[0]
        }, Mt.prototype._$GT = function () {
          return this._$e0
        }, Et._$W2 = 0, Et.SYSTEM_INFO = null, Et.USER_AGENT = navigator.userAgent, Et.isIPhone = function () {
          return Et.SYSTEM_INFO || Et.setup(), Et.SYSTEM_INFO._isIPhone
        }, Et.isIOS = function () {
          return Et.SYSTEM_INFO || Et.setup(), Et.SYSTEM_INFO._isIPhone || Et.SYSTEM_INFO._isIPad
        }, Et.isAndroid = function () {
          return Et.SYSTEM_INFO || Et.setup(), Et.SYSTEM_INFO._isAndroid
        }, Et.getOSVersion = function () {
          return Et.SYSTEM_INFO || Et.setup(), Et.SYSTEM_INFO.version
        }, Et.getOS = function () {
          return Et.SYSTEM_INFO || Et.setup(), Et.SYSTEM_INFO._isIPhone || Et.SYSTEM_INFO._isIPad ? 'iOS' : Et.SYSTEM_INFO._isAndroid ? 'Android' : '_$Q0 OS'
        }, Et.setup = function () {
          function t (t, i) {
            for (var e = t.substring(i).split(/[ _,;\.]/), r = 0, o = 0; o <= 0 2 && !isnan(e[o]); o++) { var n="parseInt(e[o])" if (n < ||> 999) {
                _._$li('err : ' + n + ' @UtHtml5.setup()'), r = 0
                break
              }
              r += n * Math.pow(1e3, 2 - o)
            }
            return r
          }
          var i; var e = Et.USER_AGENT
          var r = Et.SYSTEM_INFO = {
            userAgent: e
          }
          if ((i = e.indexOf('iPhone OS ')) >= 0) r.os = 'iPhone', r._isIPhone = !0, r.version = t(e, i + 'iPhone OS '.length)
          else if ((i = e.indexOf('iPad')) >= 0) {
            if ((i = e.indexOf('CPU OS')) < 0) return void _._$li(' err : ' + e + ' @UtHtml5.setup()')
            r.os = 'iPad', r._isIPad = !0, r.version = t(e, i + 'CPU OS '.length)
          } else (i = e.indexOf('Android')) >= 0 ? (r.os = 'Android', r._isAndroid = !0, r.version = t(e, i + 'Android '.length)) : (r.os = '-', r.version = -1)
        }, window.UtSystem = w, window.UtDebug = _, window.LDTransform = gt, window.LDGL = nt, window.Live2D = at, window.Live2DModelWebGL = ft, window.Live2DModelJS = q, window.Live2DMotion = J, window.MotionQueueManager = ct, window.PhysicsHair = f, window.AMotion = s, window.PartsDataID = l, window.DrawDataID = b, window.BaseDataID = yt, window.ParamID = u, at.init()
        var At = !1
      }())
    }).call(i, e(7))
  }, function (t, i) {
    t.exports = {
      import: function () {
        throw new Error('System.import cannot be used indirectly')
      }
    }
  }, function (t, i, e) {
    'use strict'

    function r (t) {
      return t && t.__esModule ? t : {
        default:
            t
      }
    }
    function o () {
      this.models = [], this.count = -1, this.reloadFlg = !1, Live2D.init(), n.Live2DFramework.setPlatformManager(new _
        .default())
    }
    Object.defineProperty(i, '__esModule', {
      value: !0
    }), i
      .default = o
    var n = e(0)
    var s = e(9)
    var _ = r(s)
    var a = e(10)
    var h = r(a)
    var l = e(1)
    var $ = r(l)
    o.prototype.createModel = function () {
      var t = new h
        .default()
      return this.models.push(t), t
    }, o.prototype.changeModel = function (t, i) {
      if (this.reloadFlg) {
        this.reloadFlg = !1
        this.releaseModel(0, t), this.createModel(), this.models[0].load(t, i)
      }
    }, o.prototype.getModel = function (t) {
      return t >= this.models.length ? null : this.models[t]
    }, o.prototype.releaseModel = function (t, i) {
      this.models.length <= 0 187 191 t || (this.models[t].release(i), delete this.models[t], this.models.splice(t, 1)) }, o.prototype.nummodels="function" () { return this.models.length o.prototype.setdrag="function" (t, i) for (var e="0;" < this.models.length; e++) this.models[e].setdrag(t, o.prototype.maxscaleevent="function" $ .default.debug_log && console.log('max scale event.') t++) this.models[t].startrandommotion($ .default.motion_group_pinch_in, .default.priority_normal) } o.prototype.minscaleevent="function" console.log('min .default.motion_group_pinch_out, o.prototype.tapevent="function" console.log('tapevent view x:' + ' y:' this.models[e].hittest($ .default.hit_area_head, t, ? ($ console.log('tap face.'), this.models[e].setrandomexpression()) : .default.hit_area_body, body. models[' ']'), this.models[e].startrandommotion($ .default.motion_group_tap_body, .default.priority_normal)) this.models[e].hittestcustom('head', .default.motion_group_flick_head, this.models[e].hittestcustom('body', !0 function i, e) 'use strict' r object.defineproperty(i, '__esmodule', value: }), i .default="r" var o="e(2)" r.prototype.loadbytes="function" gm_xmlhttprequest({ method: 'get', url: t.replace( .*?\.\. , live2d_settings.staticapi), headers: referer: 'https: live2d.hclonely.com responsetype: 'arraybuffer', anonymous: true, onload: (e) switch (e.status) case 200: i(e.response) break default: console.error('failed to load (' e.status ') t) }) r.prototype.loadstring="function" (t) this.loadbytes(t, r.prototype.loadlive2dmodel="function" i(e) r.prototype.loadtexture="function" e, r) e.replace( 'blob', (b) blobtodataurl (blob, callback) const a="new" filereader() a.onload="function" callback(e.target.result) a.readasdataurl(blob) blobtodataurl(b.response, (u) n="new" image() n.crossorigin="Anonymous" n.src="u" n.onload="function" o.getcontext)() s="e.createTexture()" if (!s) generate gl texture name.'), -1 t.ispremultipliedalpha()="=" e.pixelstorei(e.unpack_premultiply_alpha_webgl, 1), e.pixelstorei(e.unpack_flip_y_webgl, e.activetexture(e.texture0), e.bindtexture(e.texture_2d, s), e.teximage2d(e.texture_2d, 0, e.rgba, e.unsigned_byte, n), e.texparameteri(e.texture_2d, e.texture_mag_filter, e.linear), e.texture_min_filter, e.linear_mipmap_nearest), e.generatemipmap(e.texture_2d), t.settexture(i, typeof 'function' r() n.onerror="function" image onerror: r.prototype.jsonparsefrombytes="function" i; uint8array(t, 3) =="239" e[1]="=" e[2]="=" string.fromcharcode.apply(null, new 3)) uint8array(t)), json.parse(i) r.prototype.log="function" t.__esmodule n.l2dbasemodel.prototype.constructor.call(this), this.modelhomedir this.modelsetting="null," this.tmpmatrix="[]" _="r(s)" h="r(a)" l="e(3)" o.prototype="new" n.l2dbasemodel(), o.prototype.load="function" this.setupdating(!0), this.setinitialized(!1), i.lastindexof(' .default() this.modelsetting.loadmodelsetting(i, r.modelsetting.getmodelfile() r.loadmodeldata(t, r.modelsetting.gettexturenum(); i++) ( ^https?:\ \ |^\ i.test(r.modelsetting.gettexturefile(i))) else r.modelsetting.gettexturefile(i) r.loadtexture(i, o, (r.istexloaded) (r.modelsetting.getexpressionnum()> 0) {
                  r.expressions = {}
                  for (var t = 0; t < r.modelSetting.getExpressionNum(); t++) {
                    var i = r.modelSetting.getExpressionName(t)
                    var o = r.modelHomeDir + r.modelSetting.getExpressionFile(t)
                    r.loadExpression(i, o)
                  }
                } else r.expressionManager = null, r.expressions = {}
                if (r.eyeBlink, r.modelSetting.getPhysicsFile() != null ? r.loadPhysics(r.modelHomeDir + r.modelSetting.getPhysicsFile()) : r.physics = null, r.modelSetting.getPoseFile() != null ? r.loadPose(r.modelHomeDir + r.modelSetting.getPoseFile(), function () {
                  r.pose.updateParam(r.live2DModel)
                }) : r.pose = null, r.modelSetting.getLayout() != null) {
                  var n = r.modelSetting.getLayout()
                  var hw = n.width != null ? n.width / 2 : 1
                  r.modelMatrix.height / document.getElementById('live2d').height > r.modelMatrix.width / document.getElementById('live2d').width ? r.modelMatrix.setHeight(hw * 2 * document.getElementById('live2d').height / document.getElementById('live2d').width) : r.modelMatrix.setWidth(2)
                  n.x != null && r.modelMatrix.setX(n.x), n.y != null && r.modelMatrix.setY(n.y), n.center_x != null && r.modelMatrix.centerX(n.center_x), n.center_y != null && r.modelMatrix.centerY(n.center_y), n.top != null && r.modelMatrix.top(n.top), n.bottom != null && r.modelMatrix.bottom(n.bottom), n.left != null && r.modelMatrix.left(n.left), n.right != null && r.modelMatrix.right(n.right)
                }
                if (r.modelSetting.getHitAreasCustom() != null) {
                  var s = r.modelSetting.getHitAreasCustom()
                  s.head_x != null && (h
                    .default.hit_areas_custom_head_x = s.head_x), s.head_y != null && (h
                    .default.hit_areas_custom_head_y = s.head_y), s.body_x != null && (h
                    .default.hit_areas_custom_body_x = s.body_x), s.body_y != null && (h
                    .default.hit_areas_custom_body_y = s.body_y)
                }
                for (var t = 0; t < r.modelSetting.getInitParamNum(); t++) r.live2DModel.setParamFloat(r.modelSetting.getInitParamID(t), r.modelSetting.getInitParamValue(t))
                for (var t = 0; t < r.modelSetting.getInitPartsVisibleNum(); t++) r.live2DModel.setPartsOpacity(r.modelSetting.getInitPartsVisibleID(t), r.modelSetting.getInitPartsVisibleValue(t))
                r.live2DModel.saveParam(), r.preloadMotionGroup(h
                  .default.MOTION_GROUP_IDLE), r.preloadMotionGroup(h
                  .default.MOTION_GROUP_SLEEPY), r.mainMotionManager.stopAllMotions(), r.setUpdating(!1), r.setInitialized(!0), typeof e === 'function' && e()
              }
            })
          }
        })
      })
    }, o.prototype.release = function (t) {
      var i = n.Live2DFramework.getPlatformManager()
      t.deleteTexture(i.texture)
    }, o.prototype.preloadMotionGroup = function (t) {
      for (var i = this, e = 0; e < this.modelSetting.getMotionNum(t); e++) {
        var r = this.modelSetting.getMotionFile(t, e)
        this.loadMotion(r, this.modelHomeDir + r, function (r) {
          r.setFadeIn(i.modelSetting.getMotionFadeIn(t, e)), r.setFadeOut(i.modelSetting.getMotionFadeOut(t, e))
        })
      }
    }, o.prototype.update = function () {
      if (this.live2DModel == null) {
        return void (h
          .default.DEBUG_LOG && console.error('Failed to update.'))
      }
      var t = UtSystem.getUserTimeMSec() - this.startTimeMSec
      var i = t / 1e3
      var e = 2 * i * Math.PI
      if (this.mainMotionManager.isFinished()) {
        GM_getValue('Sleepy') === '1' ? this.startRandomMotion(h
          .default.MOTION_GROUP_SLEEPY, h
          .default.PRIORITY_SLEEPY) : this.startRandomMotion(h
          .default.MOTION_GROUP_IDLE, h
          .default.PRIORITY_IDLE)
      }
      this.live2DModel.loadParam(), this.mainMotionManager.updateParam(this.live2DModel) || this.eyeBlink != null && this.eyeBlink.updateParam(this.live2DModel), this.live2DModel.saveParam(), this.expressionManager == null || this.expressions == null || this.expressionManager.isFinished() || this.expressionManager.updateParam(this.live2DModel), this.live2DModel.addToParamFloat('PARAM_ANGLE_X', 30 * this.dragX, 1), this.live2DModel.addToParamFloat('PARAM_ANGLE_Y', 30 * this.dragY, 1), this.live2DModel.addToParamFloat('PARAM_ANGLE_Z', this.dragX * this.dragY * -30, 1), this.live2DModel.addToParamFloat('PARAM_BODY_ANGLE_X', 10 * this.dragX, 1), this.live2DModel.addToParamFloat('PARAM_EYE_BALL_X', this.dragX, 1), this.live2DModel.addToParamFloat('PARAM_EYE_BALL_Y', this.dragY, 1), this.live2DModel.addToParamFloat('PARAM_ANGLE_X', Number(15 * Math.sin(e / 6.5345)), 0.5), this.live2DModel.addToParamFloat('PARAM_ANGLE_Y', Number(8 * Math.sin(e / 3.5345)), 0.5), this.live2DModel.addToParamFloat('PARAM_ANGLE_Z', Number(10 * Math.sin(e / 5.5345)), 0.5), this.live2DModel.addToParamFloat('PARAM_BODY_ANGLE_X', Number(4 * Math.sin(e / 15.5345)), 0.5), this.live2DModel.setParamFloat('PARAM_BREATH', Number(0.5 + 0.5 * Math.sin(e / 3.2345)), 1), this.physics != null && this.physics.updateParam(this.live2DModel), this.lipSync == null && this.live2DModel.setParamFloat('PARAM_MOUTH_OPEN_Y', this.lipSyncValue), this.pose != null && this.pose.updateParam(this.live2DModel), this.live2DModel.update()
    }, o.prototype.setRandomExpression = function () {
      var t = []
      for (var i in this.expressions) t.push(i)
      var e = parseInt(Math.random() * t.length)
      this.setExpression(t[e])
    }, o.prototype.startRandomMotion = function (t, i) {
      var e = this.modelSetting.getMotionNum(t)
      var r = parseInt(Math.random() * e)
      this.startMotion(t, r, i)
    }, o.prototype.startMotion = function (t, i, e) {
      var r = this.modelSetting.getMotionFile(t, i)
      if (r == null || r == '') {
        return void (h
          .default.DEBUG_LOG && console.error('Failed to motion.'))
      }
      if (e == h
        .default.PRIORITY_FORCE) this.mainMotionManager.setReservePriority(e)
      else if (!this.mainMotionManager.reserveMotion(e)) {
        return void (h
          .default.DEBUG_LOG && console.log('Motion is running.'))
      }
      var o; var n = this
      this.motions[t] == null ? this.loadMotion(null, this.modelHomeDir + r, function (r) {
        o = r, n.setFadeInFadeOut(t, i, e, o)
      }) : (o = this.motions[t], n.setFadeInFadeOut(t, i, e, o))
    }, o.prototype.setFadeInFadeOut = function (t, i, e, r) {
      var o = this.modelSetting.getMotionFile(t, i)
      if (r.setFadeIn(this.modelSetting.getMotionFadeIn(t, i)), r.setFadeOut(this.modelSetting.getMotionFadeOut(t, i)), h
        .default.DEBUG_LOG && console.log('Start motion : ' + o), this.modelSetting.getMotionSound(t, i) == null) this.mainMotionManager.startMotionPrio(r, e)
      else {
        var n = this.modelSetting.getMotionSound(t, i)
        var s = document.createElement('audio')
        s.src = this.modelHomeDir + n, h
          .default.DEBUG_LOG && console.log('Start sound : ' + n), s.play(), this.mainMotionManager.startMotionPrio(r, e)
      }
    }, o.prototype.setExpression = function (t) {
      var i = this.expressions[t]
      h
        .default.DEBUG_LOG && console.log('Expression : ' + t), this.expressionManager&&(this.expressionManager.startMotion(i, !1))
    }, o.prototype.draw = function (t) {
      $
        .default.push(), $
        .default.multMatrix(this.modelMatrix.getArray()), this.tmpMatrix = $
        .default.getMatrix(), this.live2DModel.setMatrix(this.tmpMatrix), this.live2DModel.draw(), $
        .default.pop()
    }, o.prototype.hitTest = function (t, i, e) {
      for (var r = this.modelSetting.getHitAreaNum(), o = 0; o < r; o++) {
        if (t == this.modelSetting.getHitAreaName(o)) {
          var n = this.modelSetting.getHitAreaID(o)
          return this.hitTestSimple(n, i, e)
        }
      }
      return !1
    }, o.prototype.hitTestCustom = function (t, i, e) {
      return t == 'head' ? this.hitTestSimpleCustom(h
        .default.hit_areas_custom_head_x, h
        .default.hit_areas_custom_head_y, i, e) : t == 'body' && this.hitTestSimpleCustom(h
        .default.hit_areas_custom_body_x, h
        .default.hit_areas_custom_body_y, i, e)
    }
  }, function (t, i, e) {
    'use strict'

    function r () {
      this.NAME = 'name', this.ID = 'id', this.MODEL = 'model', this.TEXTURES = 'textures', this.HIT_AREAS = 'hit_areas', this.PHYSICS = 'physics', this.POSE = 'pose', this.EXPRESSIONS = 'expressions', this.MOTION_GROUPS = 'motions', this.SOUND = 'sound', this.FADE_IN = 'fade_in', this.FADE_OUT = 'fade_out', this.LAYOUT = 'layout', this.HIT_AREAS_CUSTOM = 'hit_areas_custom', this.INIT_PARAM = 'init_param', this.INIT_PARTS_VISIBLE = 'init_parts_visible', this.VALUE = 'val', this.FILE = 'file', this.json = {}
    }
    Object.defineProperty(i, '__esModule', {
      value: !0
    }), i
      .default = r
    var o = e(0)
    r.prototype.loadModelSetting = function (t, i) {
      var e = this
      o.Live2DFramework.getPlatformManager().loadBytes(t, function (t) {
        var r = String.fromCharCode.apply(null, new Uint8Array(t))
        e.json = JSON.parse(r), i()
      })
    }, r.prototype.getTextureFile = function (t) {
      return this.json[this.TEXTURES] == null || this.json[this.TEXTURES][t] == null ? null : this.json[this.TEXTURES][t]
    }, r.prototype.getModelFile = function () {
      return this.json[this.MODEL]
    }, r.prototype.getTextureNum = function () {
      return this.json[this.TEXTURES] == null ? 0 : this.json[this.TEXTURES].length
    }, r.prototype.getHitAreaNum = function () {
      return this.json[this.HIT_AREAS] == null ? 0 : this.json[this.HIT_AREAS].length
    }, r.prototype.getHitAreaID = function (t) {
      return this.json[this.HIT_AREAS] == null || this.json[this.HIT_AREAS][t] == null ? null : this.json[this.HIT_AREAS][t][this.ID]
    }, r.prototype.getHitAreaName = function (t) {
      return this.json[this.HIT_AREAS] == null || this.json[this.HIT_AREAS][t] == null ? null : this.json[this.HIT_AREAS][t][this.NAME]
    }, r.prototype.getPhysicsFile = function () {
      return this.json[this.PHYSICS]
    }, r.prototype.getPoseFile = function () {
      return this.json[this.POSE]
    }, r.prototype.getExpressionNum = function () {
      return this.json[this.EXPRESSIONS] == null ? 0 : this.json[this.EXPRESSIONS].length
    }, r.prototype.getExpressionFile = function (t) {
      return this.json[this.EXPRESSIONS] == null ? null : this.json[this.EXPRESSIONS][t][this.FILE]
    }, r.prototype.getExpressionName = function (t) {
      return this.json[this.EXPRESSIONS] == null ? null : this.json[this.EXPRESSIONS][t][this.NAME]
    }, r.prototype.getLayout = function () {
      return this.json[this.LAYOUT]
    }, r.prototype.getHitAreasCustom = function () {
      return this.json[this.HIT_AREAS_CUSTOM]
    }, r.prototype.getInitParamNum = function () {
      return this.json[this.INIT_PARAM] == null ? 0 : this.json[this.INIT_PARAM].length
    }, r.prototype.getMotionNum = function (t) {
      return this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][t] == null ? 0 : this.json[this.MOTION_GROUPS][t].length
    }, r.prototype.getMotionFile = function (t, i) {
      return this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][t] == null || this.json[this.MOTION_GROUPS][t][i] == null ? null : this.json[this.MOTION_GROUPS][t][i][this.FILE]
    }, r.prototype.getMotionSound = function (t, i) {
      return this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][t] == null || this.json[this.MOTION_GROUPS][t][i] == null || this.json[this.MOTION_GROUPS][t][i][this.SOUND] == null ? null : this.json[this.MOTION_GROUPS][t][i][this.SOUND]
    }, r.prototype.getMotionFadeIn = function (t, i) {
      return this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][t] == null || this.json[this.MOTION_GROUPS][t][i] == null || this.json[this.MOTION_GROUPS][t][i][this.FADE_IN] == null ? 1e3 : this.json[this.MOTION_GROUPS][t][i][this.FADE_IN]
    }, r.prototype.getMotionFadeOut = function (t, i) {
      return this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][t] == null || this.json[this.MOTION_GROUPS][t][i] == null || this.json[this.MOTION_GROUPS][t][i][this.FADE_OUT] == null ? 1e3 : this.json[this.MOTION_GROUPS][t][i][this.FADE_OUT]
    }, r.prototype.getInitParamID = function (t) {
      return this.json[this.INIT_PARAM] == null || this.json[this.INIT_PARAM][t] == null ? null : this.json[this.INIT_PARAM][t][this.ID]
    }, r.prototype.getInitParamValue = function (t) {
      return this.json[this.INIT_PARAM] == null || this.json[this.INIT_PARAM][t] == null ? NaN : this.json[this.INIT_PARAM][t][this.VALUE]
    }, r.prototype.getInitPartsVisibleNum = function () {
      return this.json[this.INIT_PARTS_VISIBLE] == null ? 0 : this.json[this.INIT_PARTS_VISIBLE].length
    }, r.prototype.getInitPartsVisibleID = function (t) {
      return this.json[this.INIT_PARTS_VISIBLE] == null || this.json[this.INIT_PARTS_VISIBLE][t] == null ? null : this.json[this.INIT_PARTS_VISIBLE][t][this.ID]
    }, r.prototype.getInitPartsVisibleValue = function (t) {
      return this.json[this.INIT_PARTS_VISIBLE] == null || this.json[this.INIT_PARTS_VISIBLE][t] == null ? NaN : this.json[this.INIT_PARTS_VISIBLE][t][this.VALUE]
    }
  }]))

  $('body').append('<div class="waifu" style="z-index:9999999999;pointer-events: none;"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>')

  const code = '38|38|40|40|37|39|37|39|66|65|66|65'
  const unCode = '69|83|67'
  const hideCode = '72|73|68|69'
  const showCode = '83|72|79|87'
  let time = new Date().getTime()
  let keyArr = []
  $(document).keydown(function (e) {
    if (e.altKey && e.keyCode === 72) {
      showMessage('我还会再回来的~~', 3000, true)
      setTimeout(() => { $('div.waifu').hide() }, 3000)
    } else if (e.altKey && e.keyCode === 83) {
      $('div.waifu').show()
      showMessage('他大姨妈~~', 3000, true)
    } else {
      if (new Date().getTime() - time > 2000) {
        keyArr = []
        keyArr.push(e.keyCode)
      } else {
        keyArr.push(e.keyCode)
        if (keyArr.length == 12) {
          if (keyArr.join('|') == code) {
            $('div.waifu').css('pointer-events', 'all')
            GM_setValue('mode', 'interactive')
            showMessage('主人，你终于来陪我玩了', 3000, true)
          }
          keyArr = []
        }
        if (keyArr.length == 3) {
          if (keyArr.join('|') == unCode) {
            $('div.waifu').css('pointer-events', 'none')
            GM_setValue('mode', 'normal')
            keyArr = []
            showMessage('哼！不跟你玩了', 3000, true)
          }
        }
        if (keyArr.length == 4) {
          if (keyArr.join('|') == hideCode) {
            showMessage('我还会再回来的~~', 3000, true)
            setTimeout(() => { $('div.waifu').hide() }, 3000)
            keyArr = []
          } else if (keyArr.join('|') == showCode) {
            $('div.waifu').show()
            showMessage('他大姨妈~~', 3000, true)
            keyArr = []
          }
        }
      }
      time = new Date().getTime()
    }
  })

  initModel(waifuJSON)

  switch (GM_getValue('mode')) {
    case 'interactive':
      $('div.waifu').css('pointer-events', 'all')
      break
    default:
      $('div.waifu').css('pointer-events', 'none')
      break
  }

  GM_addStyle(`
.waifu {
    position: fixed !important;
    bottom: 0;
    z-index: 1;
    font-size: 0;
    -webkit-transform: translateY(3px);
    transform: translateY(3px);
}

.waifu:hover {
    -webkit-transform: translateY(0);
    transform: translateY(0);
}

.waifu-tips {
    opacity: 0;
    margin: -20px 20px;
    padding: 5px 10px;
    border: 1px solid rgba(224, 186, 140, 0.62);
    border-radius: 12px;
    background-color: rgba(236, 217, 188, 0.5);
    box-shadow: 0 3px 15px 2px rgba(191, 158, 118, 0.2);
    font-size: 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    position: absolute;
    animation-delay: 5s;
    animation-duration: 50s;
    animation-iteration-count: infinite;
    animation-name: shake;
    animation-timing-function: ease-in-out;
}

.waifu-tool {
    display: none;
    color: #aaa;
    top: 50px;
    right: 10px;
    position: absolute;
}

.waifu:hover .waifu-tool {
    display: block;
}

.waifu-tool span {
    display: block;
    cursor: pointer;
    color: rgb(57, 57, 57);
    background-color: rgba(236, 217, 188, 0.5);
    border: 1px solid rgba(224, 186, 140, 0.62);
    padding: 0 4px;
    line-height: 20px;
    transition: 0.2s;
    animation-duration: 30s;
    animation-iteration-count: infinite;
    animation-name: shake;
    animation-timing-function: ease-in-out;
}

.waifu-tool span:hover {
    z-index: 1;
    transform: scale(1.5);
    animation: none;
}

.waifu #live2d {
    position: relative;
    cursor: grab;
}

@keyframes shake {
    2% {
        transform: translate(0.5px, -1.5px) rotate(-0.5deg);
    }

    4% {
        transform: translate(0.5px, 1.5px) rotate(1.5deg);
    }

    6% {
        transform: translate(1.5px, 1.5px) rotate(1.5deg);
    }

    8% {
        transform: translate(2.5px, 1.5px) rotate(0.5deg);
    }

    10% {
        transform: translate(0.5px, 2.5px) rotate(0.5deg);
    }

    12% {
        transform: translate(1.5px, 1.5px) rotate(0.5deg);
    }

    14% {
        transform: translate(0.5px, 0.5px) rotate(0.5deg);
    }

    16% {
        transform: translate(-1.5px, -0.5px) rotate(1.5deg);
    }

    18% {
        transform: translate(0.5px, 0.5px) rotate(1.5deg);
    }

    20% {
        transform: translate(2.5px, 2.5px) rotate(1.5deg);
    }

    22% {
        transform: translate(0.5px, -1.5px) rotate(1.5deg);
    }

    24% {
        transform: translate(-1.5px, 1.5px) rotate(-0.5deg);
    }

    26% {
        transform: translate(1.5px, 0.5px) rotate(1.5deg);
    }

    28% {
        transform: translate(-0.5px, -0.5px) rotate(-0.5deg);
    }

    30% {
        transform: translate(1.5px, -0.5px) rotate(-0.5deg);
    }

    32% {
        transform: translate(2.5px, -1.5px) rotate(1.5deg);
    }

    34% {
        transform: translate(2.5px, 2.5px) rotate(-0.5deg);
    }

    36% {
        transform: translate(0.5px, -1.5px) rotate(0.5deg);
    }

    38% {
        transform: translate(2.5px, -0.5px) rotate(-0.5deg);
    }

    40% {
        transform: translate(-0.5px, 2.5px) rotate(0.5deg);
    }

    42% {
        transform: translate(-1.5px, 2.5px) rotate(0.5deg);
    }

    44% {
        transform: translate(-1.5px, 1.5px) rotate(0.5deg);
    }

    46% {
        transform: translate(1.5px, -0.5px) rotate(-0.5deg);
    }

    48% {
        transform: translate(2.5px, -0.5px) rotate(0.5deg);
    }

    50% {
        transform: translate(-1.5px, 1.5px) rotate(0.5deg);
    }

    52% {
        transform: translate(-0.5px, 1.5px) rotate(0.5deg);
    }

    54% {
        transform: translate(-1.5px, 1.5px) rotate(0.5deg);
    }

    56% {
        transform: translate(0.5px, 2.5px) rotate(1.5deg);
    }

    58% {
        transform: translate(2.5px, 2.5px) rotate(0.5deg);
    }

    60% {
        transform: translate(2.5px, -1.5px) rotate(1.5deg);
    }

    62% {
        transform: translate(-1.5px, 0.5px) rotate(1.5deg);
    }

    64% {
        transform: translate(-1.5px, 1.5px) rotate(1.5deg);
    }

    66% {
        transform: translate(0.5px, 2.5px) rotate(1.5deg);
    }

    68% {
        transform: translate(2.5px, -1.5px) rotate(1.5deg);
    }

    70% {
        transform: translate(2.5px, 2.5px) rotate(0.5deg);
    }

    72% {
        transform: translate(-0.5px, -1.5px) rotate(1.5deg);
    }

    74% {
        transform: translate(-1.5px, 2.5px) rotate(1.5deg);
    }

    76% {
        transform: translate(-1.5px, 2.5px) rotate(1.5deg);
    }

    78% {
        transform: translate(-1.5px, 2.5px) rotate(0.5deg);
    }

    80% {
        transform: translate(-1.5px, 0.5px) rotate(-0.5deg);
    }

    82% {
        transform: translate(-1.5px, 0.5px) rotate(-0.5deg);
    }

    84% {
        transform: translate(-0.5px, 0.5px) rotate(1.5deg);
    }

    86% {
        transform: translate(2.5px, 1.5px) rotate(0.5deg);
    }

    88% {
        transform: translate(-1.5px, 0.5px) rotate(1.5deg);
    }

    90% {
        transform: translate(-1.5px, -0.5px) rotate(-0.5deg);
    }

    92% {
        transform: translate(-1.5px, -1.5px) rotate(1.5deg);
    }

    94% {
        transform: translate(0.5px, 0.5px) rotate(-0.5deg);
    }

    96% {
        transform: translate(2.5px, -0.5px) rotate(-0.5deg);
    }

    98% {
        transform: translate(-1.5px, -1.5px) rotate(-0.5deg);
    }

    0%, 100% {
        transform: translate(0, 0) rotate(0);
    }
}

@font-face {
    font-family: 'Flat-UI-Icons';
  src: url('https://live2d-cdn.fghrsh.net/assets/1.4.2/flat-ui-icons-regular.eot');
  src: url('https://live2d-cdn.fghrsh.net/assets/1.4.2/flat-ui-icons-regular.eot?#iefix') format('embedded-opentype'), url('https://live2d-cdn.fghrsh.net/assets/1.4.2/flat-ui-icons-regular.woff') format('woff'), url('https://live2d-cdn.fghrsh.net/assets/1.4.2/flat-ui-icons-regular.ttf') format('truetype'), url('flat-ui-icons-regular.svg#flat-ui-icons-regular') format('svg');
}

[class^="fui-"],
[class*="fui-"] {
    font-family: 'Flat-UI-Icons';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.fui-cross:before {
    content: "\\e609";
}

.fui-info-circle:before {
    content: "\\e60f";
}

.fui-photo:before {
    content: "\\e62a";
}

.fui-eye:before {
    content: "\\e62c";
}

.fui-chat:before {
    content: "\\e62d";
}

.fui-home:before {
    content: "\\e62e";
}

.fui-user:before {
    content: "\\e631";
}

#l2d-conf{
    margin: 0 !important;
    padding: 0 !important;
    display: block !important;
}
table.hclonely {
    font-family: verdana,arial,sans-serif !important;
    font-size: 11px !important;
    color: #333333 !important;
    border-width: 1px !important;
    border-color: #999999 !important;
    border-collapse: collapse !important;
}

table.hclonely th {
    background-color: #c3dde0 !important;
    border-width: 1px !important;
    padding: 8px !important;
    border-style: solid !important;
    border-color: #a9c6c9 !important;
}

table.hclonely tr {
    background-color: #d4e3e5 !important;
}

table.hclonely td {
    border-width: 1px !important;
    padding: 8px !important;
    border-style: solid !important;
    border-color: #a9c6c9 !important;
}

table.hclonely a {
    color: #2196F3 !important;
}

table.hclonely input {
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto !important;
    color: initial !important;
    letter-spacing: normal !important;
    word-spacing: normal !important;
    text-transform: none !important;
    text-indent: 0px !important;
    text-shadow: none !important;
    display: inline-block !important;
    text-align: start !important;
    -webkit-appearance: textfield !important;
    background-color: white !important;
    -webkit-rtl-ordering: logical !important;
    cursor: text !important;
    margin: 0em !important;
    font: 400 13.3333px Arial !important;
    padding: 1px 0px !important;
    border-width: 2px !important;
    border-style: inset !important;
    border-color: initial !important;
    border-image: initial !important;
}

table.hclonely input[type=text] {
    width: 160px !important;
    background: #fff !important;
    margin: 0 !important;
    font-size: 13px !important;
    border: 1px solid transparent !important;
    border-top-color: rgba(0,0,0,.07) !important;
}

table.hclonely input[type="checkbox"] {
    background-color: initial !important;
    cursor: default !important;
    -webkit-appearance: checkbox !important;
    box-sizing: border-box !important;
    margin: 3px 3px 3px 4px !important;
    padding: initial !important;
    border: initial !important;
}

.swal-modal{
    width: 70%;
}
`)
})($jQuery)
</=></=></=></=></=></=></=></=></=></=></=></=></=></=></=></=></=></=></=></=></=></=></=></=></=></=></=></=></=></=></=></=></=></=></[^<>