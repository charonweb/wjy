<template>
    <div class="hello">
      <nav-bar></nav-bar>

			  <div><img src="../../src/assets/banner/imBaner.png" alt="" style="width:100%"></div>
	
    <aside class="section" style="background:#fff">
      <div class="section-content">
        <div class="row">
          <div class="column large-6 medium-6 small-12" style="flex:1">
            <a style="width:100%"><img src="../../src/assets/shikuIM.png" alt="" style="width:100%"></a>
          </div>
          <div style="flex:1;margin-top:120px" class="column large-6 medium-6 small-12">
            <div class="titleButton">
              <h3 >视频即时通讯</h3>
            </div>
            <ul style="margin-bottom:3rem;list-style:none;padding:0" >
              <li class="text-appShow" v-for="item in listContent" :key="item">
                {{item}}
              </li>
            </ul>
            <el-button type="success">立即试用</el-button><el-button type="success">了解更多</el-button>
            <div style="margin-top:50px;text-align:center">
              <div class="noLine" style="float:left;margin-right:20px">
                <img src="../../src/assets/icon2-2.png">
                <p>单聊群聊</p>
              </div>
              <div class="noLine" style="float:left;margin-right:20px">
                <img src="../../src/assets/icon13-2.png">
                <p>企业通讯录</p>
              </div>
              <div class="noLine" style="float:left;margin-right:20px">
                <img src="../../src/assets/yue.png">
                <p>阅后即焚</p>
              </div>
              <div class="noLine" style="float:left;margin-right:20px">
                <img src="../../src/assets/friend.png">
                <p>朋友圈</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
    <aside class="section" style="background:#FAFAFA">
      <div class="section-content">
        <div class="row">
          <div style="flex:1;margin-top:120px;text-align:right;" class="column large-6 medium-6 small-12">
            <div class="titleButton;flex-r">
              <h3 >视频高清会议</h3>
            </div>
            <ul style="margin-bottom:3rem;list-style:none">
              <li class="text-appShow" v-for="item in metting" :key="item">
                {{item}}
              </li>
            </ul>
            <el-button type="success">立即试用</el-button><el-button type="success">了解更多</el-button>
            <div style="margin-top:50px;text-align:center">
              <div class="noLine" style="float:right;margin-right:20px">
                <img src="../../src/assets/camera.png">
                <p>摄像头转换</p>
              </div>
              <div class="noLine" style="float:right;margin-right:20px">
                <img src="../../src/assets/change.png">
                <p>支持web网页</p>
              </div>
              <div class="noLine" style="float:right;margin-right:20px">
                <img src="../../src/assets/shipin.png">
                <p>视频会议</p>
              </div>
              <div class="noLine" style="float:right;margin-right:20px">
                <img src="../../src/assets/add.png">
                <p>邀请好友</p>
              </div>
            </div>
          </div>
             <div class="column large-6 medium-6 small-12" style="flex:1">
            <a style="width:100%"><img src="../../src/assets/shikuIM.png" alt="" style="width:100%"></a>
          </div>
        </div>
      </div>
    </aside>
    <aside class="section" style="background:#fff">
      <div class="section-content">
        <div class="row">
          <div class="column large-6 medium-6 small-12" style="flex:1">
            <a style="width:100%"><img src="../../src/assets/shikuIM.png" alt="" style="width:100%"></a>
          </div>
          <div style="flex:1;margin-top:120px" class="column large-6 medium-6 small-12">
            <div class="titleButton">
              <h3 >视频直播</h3>
            </div>
            <ul style="margin-bottom:3rem;list-style:none;padding:0" >
              <li class="text-appShow" v-for="item in liveBro" :key="item">
                {{item}}
              </li>
            </ul>
            <el-button type="success">立即试用</el-button><el-button type="success">了解更多</el-button>
            <div style="margin-top:50px;text-align:center">
              <div class="noLine" style="float:left;margin-right:20px">
                <img src="../../src/assets/danmu.png">
                <p>有趣弹幕</p>
              </div>
              <div class="noLine" style="float:left;margin-right:20px">
                <img src="../../src/assets/hudong.png">
                <p>主播互动</p>
              </div>
              <div class="noLine" style="float:left;margin-right:20px">
                <img src="../../src/assets/like.png">
                <p>立马点赞</p>
              </div>
              <div class="noLine" style="float:left;margin-right:20px">
                <img src="../../src/assets/good.png">
                <p>多样好礼</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
    <aside class="section" style="background:#fff">
      <div class="section-content">
        <div class="row">
          <div class="column large-6 medium-6 small-12" style="flex:1">
            <div style="text-align:center;display:flex;justify-content:center;width:100%"><h3 style="width:100%;text-align:center">对比云服务</h3></div>
            <table class="_tabel_0" style="margin-top:20px;border;width:100%">
              <tbody class="text-appShow" style="font-size:15px;color:#5f5d5d">
                <tr class="border" style="height:60px">
                  <td width="20%" style="background:#D9D9D9"><b>名称</b></td>
                  <td width="35%"><strong>视酷即时通讯（自由知识产权）</strong></td>
                  <td width="55%"><strong>IM云服务(如寡信、容云、网易云等)</strong></td>
                </tr>
                <tr class="border" style="height:60px">
  <td style="background:#D9D9D9">费用</td>
                  <td >一次性支出再无费用，任意部署</td>
                  <td >用户大幅增长时，软件费用大增，骑虎难下</td>
                </tr>
                  <tr class="border" style="height:60px">
  <td style="background:#D9D9D9">性能</td>
                  <td >采用国外成熟开源平台，同时并发达20-50万用户</td>
                  <td >经常有用云服务的客户抱怨丢消息或连不上，转而选择我们</td>
                </tr>
                  <tr class="border" style="height:60px">
  <td style="background:#D9D9D9">研发</td>
                  <td >掌控全部源代码，深度自由定制</td>
                  <td >	云服务厂家开放接口得收费；就算想付费也未必能开放，处处制肘</td>
                </tr>
                  <tr class="border" style="height:60px">
  <td style="background:#D9D9D9">服务</td>
                  <td >服务器自己架设和维护，可控性高，服务稳定</td>
                  <td >用户少时，云服务免费，但服务质量差，投诉多</td>
                </tr>
                  <tr class="border" style="height:60px">
  <td style="background:#D9D9D9">安全</td>
                  <td >私有化部署(内网或VPN)，聊天记录不外泄</td>
                  <td >公有化部署，聊天记录会外泄；如果私有化部署得付费</td>
                </tr>
                  <tr class="border" style="height:60px">
  <td style="background:#D9D9D9"><strong>结论</strong></td>
                  <td ><strong>高定制、高安全、费用低、服务好</strong></td>
                  <td ><strong>无法定制、不安全、费用高、服务差</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </aside>
    <aside class="section" style="background:#fff">
      <div class="section-content">
        <div class="row">
          <div class="column large-6 medium-6 small-12" style="flex:1;text-align:center">
            <h3 style="text-align:center">
              <span style="color:#E7E6E6;margin-right: 20px;border-top: 1px solid rgba(0,0,0,.1);position: relative;top: 17px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              部分成功案例
              <span 
              style="color:#E7E6E6;margin-left: 20px;border-top: 1px solid rgba(0,0,0,.1);position: relative;top: 17px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </h3>
          </div>
        </div>
      </div>
    </aside>
     <aside class="section" style="background:#fff">
       <div class="section-content">
         <div class="row" style="width:100%" >
           <div  class="rowImg" v-for="(item,index) in success" :key="index">
             <img :src="item.img" alt="" style="max-width:100%;height:auto">
           </div>
           </div>
       </div>
     </aside>
     <aside class="section" style="background:#fff">
       <div class="section-content">
         <div class="row">
            <div class="column large-6 medium-6 small-12" style="flex:1;text-align:center">
               <h3 style="text-align:center">
              <span style="color:#E7E6E6;margin-right: 20px;border-top: 1px solid rgba(0,0,0,.1);position: relative;top: 17px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            关于我们
              <span style="color:#E7E6E6;margin-left: 20px;border-top: 1px solid rgba(0,0,0,.1);position: relative;top: 17px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </h3>
            </div>
         </div>
       </div>
     </aside>
     <div class="bg">
即时通讯、直播软件、手机游戏、研发的国家级高新技术企业。
            <div class="container1" style="width:1200px;height:500px;text-align:center">
              <h1 style="color:#fff">
                深圳市视酷信息技术有限公司<br>
                <small style="font-size:24px">
                  <a href="im-introduce.html" style="color: white">即时通讯和视频聊天软件解决方案提供商</a>
                </small>
              </h1>
              <p class="wordsleft">深圳市视酷信息技术有限公司是一家专业从事即时通讯、视频通话和会议、视频直播、手机游戏等软件研发的国家级高新技术企业。</p>
              <p class="wordsleft">公司成立于2014年，研发基地位于深圳，现有员工30多人，技术骨干来自于腾讯、华为等大型公司的技术大牛，有着十几年的软件项目经验和研发积累。</p>
              <p class="wordsleft">公司专注于移动互联网的多媒体通讯领域，比如即时通讯、语音通话、视频通话，语音对讲、视频直播等，提供企业级高并发即时通讯私有云一体化解决方案，全国客户累计达500多家，涉及行业广泛包括：科研、军队、政府、金融、地产、娱乐媒体、物流等等。帮助许多客户降低了运营成本，好评如潮，为移动互联网的发展略尽了绵薄之力，公司的宗旨是：您的成功就是我们的成功。</p>
            </div>
     </div>
      <aside class="section" style="background:#f2f2f2;color:#888;font-size:15px;line-height:1.333">
      <div class="section-content">
        <div class="row">
          <div class="row-message" style="flex:7;text-align:center">
            <p style="margin-top: 2rem;margin-bottom: 0">深圳市视酷信息技术有限公司</p>
            <p style="margin-bottom: 0;margin-top: 0">&nbsp;电话:18938880745&nbsp; 微信:18938880745 &nbsp;QQ:287076078</p>
            <p style="margin-bottom: 0;margin-top: 0">售前热线：4008770080&nbsp;联系人:唐先生</p>
            <p style="margin-bottom: 0;margin-top: 0">售前热线：4008770080&nbsp;联系人:唐先生</p>
            <p style="margin-top: 0"><a href="http://www.beian.miit.gov.cn">粤ICP备17119151号</a></p>
          </div>
          <div class="erweima" style="flex:3;text-align:left">
            <img src="../../src/assets/wechat.jpg" style="width: 90px;margin-top: 1rem;">
          </div>
        </div>
      </div>
      </aside>
    </div>
</template>
<script>
import NavBar from '@/components/NavBar'
export default {
    name:'Shiku',
    components:{NavBar},
     data () {
    return {
      msg: 'Welcome to Your Vue.js App',
       activeIndex: '1',
        activeIndex2: '1',
        listContent:['视酷即时通讯软件基于Tigase，单台服务器并发20万用户以上，集群支持上亿用户',
        '支持公有云和私有化部署，比如国外网络、局域网、内网、VPN等','视酷企业即时通讯工具支持文字、图片、表情、语音、视频、位置、名片、文件、红包等',
        '支持万人群聊、聊天记录漫游、送达回执、已读回执、阅后即焚、加密通讯、树形企业通讯录等','提供全套即时通讯软件无限制源代码，深度自由定制'],
        metting:[' 支持二人聊天、语音对讲、多人视频等','最高支持1080P高清，采用H264编码，流量小','支持安卓、iOS、Web等各设备互通','提供全套即时通讯软件无限制源代码，深度自由定制'],
        liveBro:['视频质量高清，延时在1-3秒之间，支持苹果和安卓','通过集群配置，每个房间可支持上万人观看直播','多种美颜效果为颜值加分','管理员可在即时通讯后台系统管理直播间','提供全套即时通讯软件无限制源代码，深度自由定制'],
        success:[{
          txt:'中科院',
          img:require('../../src/assets/zky.png')
        },{
          txt:'兵器研究所',
          img:require('../../src/assets/wqyjs.png')
        },{
          txt:'赛亿科技',
          img:require('../../src/assets/sykj.png')
        },{
          txt:'北斗集团',
          img:require('../../src/assets/13.png')
        },
        {
          txt:'格力地产',
          img:require('../../src/assets/14.png')
        },
        {
          txt:'老来网',
          img:require('../../src/assets/15.png')
        },{
          txt:'文思海辉',
          img:require('../../src/assets/16.png')
        },{
          txt:'东南亚电信',
          img:require('../../src/assets/dnydx.png')
        }]
    }
  },
  mounted(){
  },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style scoped>

</style>>
