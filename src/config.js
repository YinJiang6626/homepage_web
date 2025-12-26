const config = {
	//网页元数据
	metaData: {
		title: 'SakuraYin的个人主页 (◍＞◡＜◍)',
		description: '欢迎来到SakuraYin的命座空间！',
		keywords: 'SakuraYin,sakurayin,个人主页,个人网站',
		icon: '/img/icon32x32.png'   //网页图标，支持外链
	},

	avatar: "/img/avatar.jpg", // 头像
	welcometitle: "Hi, I'm SakuraYin", // 标题

	// 颜色配置
	color: {
		themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
		welcometitlecolor: "#FFFFFF", // 标题颜色 例： #7BFFC9
		turntablecolor1: "#FFFF00",  // 转盘渐变色一
		turntablecolor2: "#00FFFF"   // 转盘渐变色二
	},

	brightness: 85, // 背景亮度 --%
	blur: 5, // 毛玻璃模糊效果

	// 我的标签
	tags: ['乐观开朗', '随和亲切', '善于学习', '乐于奉献', '善解人意', '二次元', '“游戏人生”', "异世界魔法爱好者", "修仙界隐士修者"],

	// 默认背景壁纸
	background: {
		"pc": {   //pc端
			"type": "pic",   //"pic":静态壁纸;"video":动态壁纸
			"datainfo": {
				"title": "海洋女孩",
				"preview": "/img/wallpaper/static/海洋女孩/image-pre.webp",
				"url": "/img/wallpaper/static/海洋女孩/image.png",     //当然，也可填写网络地址或壁纸api，如随机PC壁纸api："url":"https://t.mwm.moe/pc"
			},
		},
		"mobile": {   //移动端
			"type": "pic",
			"datainfo": {
				"title": "0001",
				"preview": "/img/wallpaper/static-mobile/0001/image-pre.webp",
				"url": "/img/wallpaper/static-mobile/0001/image.png"  //同理，随机移动端壁纸："url":"https://t.mwm.moe/mp"
			}
		}

	},

	//极坐标图数据
	polarChart: {
		skills: ['React', 'TypeScript', 'linux', 'Docker', 'C', 'C++', 'Java', 'Python', 'verilog'],
		skillPoints: [75, 80, 85, 70, 90, 88, 93, 95, 93],
	},

	//社交按钮
	socialPlatformIcons: [
		{ icon: "mdi-github", link: "https://github.com/YinJiang6626" },
		{ icon: "mdi-github", link: "https://gitee.com/su_su_su2233" },
		{ icon: "mdi-email", link: "kanka1074@163.com" },
		{ icon: "mdi-qqchat", link: "https://user.qzone.qq.com/3277114747" },
		{ icon: "mdi-youtube", link: "https://space.bilibili.com/286956889" },
		{ icon: "mdi-steam", link: "https://steamcommunity.com/profiles/76561199523365972" }
	],

	//打字机
	typeWriterStrings: [
		"为世界上所有的美好而战！",
		"我会把这个不完美的故事，变成我们期望的样子。",
		"鸟为什么会飞？因为它们必须飞向天际。",
		"离别总是会到来的，就像故事一定会有自己的结局。",
		"我们在世间留下的足迹，终会在未来的某一日，成为另一个人前行的灯火。",
		"无论是冒险还是做生意，机会都稍纵即逝。",
		"劳逸结合是不错，但也别放松过头。",
		"耽误太多时间，事情可就做不完了。",
		"逃避往往是最方使的选择。但它没法解决任何问题，也不能帮助你跨越任障碍。",
		"生命因何而沉睡，因为总有一天，我们会从梦中醒来。",
		"所谓开拓，就是沿着前人未尽的道路，走出更遥远的距离！",
		"我梦见一片焦土，一株破土而生的新蕊，它迎着朝阳绽放，向我低语呢喃：“飞萤扑火，向死而生！”",
		"以爱为始的故事，也一定以爱为终。"
	],

	//音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
	musicPlayer: {
		server: 'netease',  //服务提供商 --网易云音乐
		type: 'playlist',   //歌单类型
		id: '2028178887'  //歌单id ---> music.163.com/#/playlist?id=2028178887
	},

	//壁纸数据 -----可以将壁纸文件上传到图床获取网络直链。若想调用api，请前往脚本自行修改逻辑
	wallpaper: {
		pic: [
			{ "title": "海洋女孩", "preview": "/img/wallpaper/static/海洋女孩/image-pre.webp", "url": "/img/wallpaper/static/海洋女孩/image.png" },
			{ "title": "书房夜晚", "preview": "/img/wallpaper/static/书房夜晚/image-pre.webp", "url": "/img/wallpaper/static/书房夜晚/image.png" },
			{ "title": "安逸舒适", "preview": "/img/wallpaper/static/安逸舒适/image-pre.webp", "url": "/img/wallpaper/static/安逸舒适/image.png" },
			{ "title": "jswcMaMj", "preview": "https://s21.ax1x.com/2025/07/23/pVGli59.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGli59.jpg" },
			{ "title": "pgtTqoqq", "preview": "https://s21.ax1x.com/2025/07/23/pVGlmDO.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlmDO.jpg" },
			{ "title": "cvKMKhue", "preview": "https://s21.ax1x.com/2025/07/23/pVGlNqS.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlNqS.jpg" },
			{ "title": "XpxvQVoP", "preview": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.jpg" },
			{ "title": "fVEEjEOA", "preview": "https://s21.ax1x.com/2025/07/23/pVGlEgx.md.webp", "url": "https://s21.ax1x.com/2025/07/23/pVGlEgx.webp" },
			{ "title": "jgnIKMpd", "preview": "https://s21.ax1x.com/2025/07/23/pVGldaQ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGldaQ.jpg" },
			{ "title": "mgqyySeh", "preview": "https://s21.ax1x.com/2025/07/23/pVGl82t.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGl82t.jpg" },
			{ "title": "dSXZfZp", "preview": "https://s21.ax1x.com/2025/07/23/pVGlaVg.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlaVg.jpg" },
		],
		picMobile: [
			{ "title": "0001", "preview": "/img/wallpaper/static-mobile/0001/image-pre.webp", "url": "/img/wallpaper/static-mobile/0001/image.png" },
			{ "title": "0002", "preview": "/img/wallpaper/static-mobile/0002/image-pre.webp", "url": "/img/wallpaper/static-mobile/0002/image.png" },
			{ "title": "0003", "preview": "/img/wallpaper/static-mobile/0003/image-pre.webp", "url": "/img/wallpaper/static-mobile/0003/image.png" },
			{ "title": "0004", "preview": "/img/wallpaper/static-mobile/0004/image-pre.webp", "url": "/img/wallpaper/static-mobile/0004/image.png" },
			{ "title": "DfNHPPcc", "preview": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.jpg" },
			{ "title": "cZZwzhis", "preview": "https://s21.ax1x.com/2025/07/23/pVG1Vij.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1Vij.jpg" },
			{ "title": "aANKZHPX", "preview": "https://s21.ax1x.com/2025/07/23/pVGlIR1.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlIR1.jpg" },
		],
		video: [
			{
				"title": "尼尔：机械纪元 团队",
				"preview": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team-pre.webm",
				"url": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team.webm"
			},
			{
				"title": "向往航天的女孩",
				"preview": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
				"url": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm"
			},
			{
				"title": "世界很温柔《龙族》上杉绘梨衣",
				"preview": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85-pre.webm",
				"url": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85.webm"
			},
		],
		videoMobile: [
			{
				"title": "幻觉镇-gaako_illust",
				"preview": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"
			},
			{
				"title": "chuva",
				"preview": "/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/chuva/chuva.mp4"
			},
			{
				"title": "Doodle-小猫女仆降临",
				"preview": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4"
			},
		],
	},

	//项目卡片 其中 字段"show"控制初始卡片的text是否展开
	projectcards: [
		{ go: "🚀 前往", img: "/img/proj/yuanqin.png", title: "原琴自动演奏", subtitle: "朋友联机装X工具", text: "通过解析输入琴谱，根据节奏，调用windows键盘输入的api实现自动弹奏", url: "https://github.com/YinJiang6626/yuanQin", show: false },
		{ go: "🗂️ 前往", img: "/img/proj/steganography.png", title: "高容量信息隐写", subtitle: "安全的学习资料转播工具", text: "通过深度学习，实现图片的高容量隐写，同时进行知识蒸馏，从而实现移动端的部署", url: "https://gitee.com/HITSZ_InfoStegano/Learn-Universal-Deep-Hiding", show: false },
		{ go: "📝 前往", img: "/img/proj/CPU.png", title: "基于龙芯架构CPU设计", subtitle: "龙芯架构双发流水线CPU设计", text: "完成了双发射、流水线设计，同时具有一级Cache，通过了上板测试", url: "https://gitee.com/su_su_su2233/LoongArch_study", show: false },
		{ go: "👍 前往", img: "/img/proj/aircraftWar.png", title: "飞机大战小游戏", subtitle: "基于Java语言开发的飞机大战", text: "实践了各种设计模式的应用，并一定程度上拓展了游戏玩法", url: "https://gitee.com/su_su_su2233/aircraft-war", show: false },
		{ go: "🗃 前往", img: "/img/proj/blog.png", title: "樱花博客", subtitle: "博客网站试做", text: "尝试搭建一个可以有注册、登录、发送博客功能的完整博客完整，用python语言编写后端服务，用mysql数据库存储数据，基于react框架搭建前端网页", url: "https://gitee.com/su_su_su2233/first_project", show: false },
		{ go: "🎨 前往", img: "/img/proj/morse.png", title: "摩尔斯电码发报器", subtitle: "说是能提高野外生存率", text: "基于MSPM0G3507开发板制作的摩尔斯电码发报器，经历仿真测试，面包板测试，然后自行设计PCB板，焊接测试后，与3D打印外壳组装，得到最终的成品", url: "https://gitee.com/su_su_su2233/pcb", show: false },
	],

	statement: ["备案号：XXICP备123456789号", "Copyright © 2025 Leleo"],
}

export default config