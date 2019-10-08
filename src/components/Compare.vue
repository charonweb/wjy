<template>
<div class="hello">
<nav-bar></nav-bar>
			  <div>
                  <img src="../../src/assets/banner/imBaner.png" alt="" style="width:100%">
              </div>
              <div class="title text-center" style="margin:4rem 0 2rem 0">
                        <span style="color:#E7E6E6;margin-right: 20px;border-top: 1px solid rgba(0,0,0,.1);position: relative;top: 17px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>服务端比较
                        <span style="color:#E7E6E6;margin-left:  20px;border-top: 1px solid rgba(0,0,0,.1);position: relative;top: 17px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </div>
                    <div class="container" style="margin-top: 20px; margin-bottom: 20px;">
                        <table class="_table_0">
                                    <tbody>
                                            <tr class="border tableHead" style="">
                                                <td width="15%">
                                                    <b>功能</b>
                                                </td>
                                                <td width="15%">
                                                    <strong>Openfire</strong>
                                                </td>
                                                <td width="20%">
                                                    <strong>Tigase</strong>
                                                </td>
                                                <td width="25%">
                                                    <b>视酷即时通讯系统（基于Tigase）</b>
                                                </td>
                                                <td width="25%">
                                                    <b>酷信（基于Socket）</b>
                                                </td>
                                            </tr>
                                            <tr class="border">
                                                <td>网络框架</td>
                                                <td>Java的MINA</td>
                                                <td>Java的NIO</td>
                                                <td>Java的NIO</td>
                                                <td>AIO</td>
                                            </tr>
                                            <tr class="border">
                                                <td>单聊、群聊</td>
                                                <td>支持</td>
                                                <td>支持</td>
                                                <td>支持并可以发送图片、语音、视频、文件等</td>
                                                <td>支持并可以发送图片、语音、视频、文件等</td>
                                            </tr>
                                            <tr class="border">
                                                <td>离线推送</td>
                                                <td>不支持</td>
                                                <td>不支持</td>
                                                <td>支持</td>
                                                <td>支持</td>
                                            </tr>
                                            <tr class="border">
                                                <td>消息回执</td>
                                                <td>不支持</td>
                                                <td>不支持</td>
                                                <td>支持</td>
                                                <td>支持</td>
                                            </tr>
                                            <tr class="border">
                                                <td>聊天记录</td>
                                                <td>不支持</td>
                                                <td>不支持</td>
                                                <td>支持</td>
                                                <td>支持</td>
                                            </tr>
                                            <tr class="border">
                                                <td>NoSQL存储</td>
                                                <td>不支持</td>
                                                <td>不支持</td>
                                                <td>支持并已实现MongoDB存储</td>
                                                <td>支持并已实现MongoDB存储</td>
                                            </tr>
                                            <tr class="border">
                                                <td>朋友圈</td>
                                                <td>不支持</td>
                                                <td>不支持</td>
                                                <td>支持</td>
                                                <td>支持</td>
                                            </tr>
                                            <tr class="border">
                                                <td>服务器集群</td>
                                                <td>支持但不稳定</td>
                                                <td>支持</td>
                                                <td>支持并可以通过增加机器横向拓展</td>
                                                <td>支持并可以通过增加机器横向拓展</td>
                                            </tr>
                                            <tr class="border">
                                                <td>单台服务器并发数</td>
                                                <td>50000</td>
                                                <td>150000</td>
                                                <td>200000</td>
                                                <td>300000</td>
                                            </tr>
                                            <tr>
                                                <td colspan="4"></td>
                                            </tr>
                                            <!-- <tr>
                                                <td colspan="4"></td>
                                            </tr> -->
                                        </tbody>
                            </table>
                    </div>
                      <div class="title text-center" style="margin:4rem 0 2rem 0">
                        <span style="color:#E7E6E6;margin-right: 20px;border-top: 1px solid rgba(0,0,0,.1);position: relative;top: 17px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>服务端配置
                        <span style="color:#E7E6E6;margin-left:  20px;border-top: 1px solid rgba(0,0,0,.1);position: relative;top: 17px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </div>
                     <div class="container" style="margin-top: 20px; margin-bottom: 20px;">
                         <table class="_table_0">
                                <tbody>
                                    <tr class="border tableHead" style="">
                                        <td width="17%">
                                            <b>注册用户</b>
                                        </td>
                                        <td width="15%">
                                            <strong>
                                                机器用途
                                            </strong>
                                        </td>
                                        <td width="50%">
                                            <strong>阿里云配置(以CPU不超过40%为原则,<br>
                                                获取较快响应即良好用户体验为原则)</strong>
                                        </td>
                                        <td width="9%">
                                            <b>台数</b>
                                        </td>
                                        <td width="9%">
                                            <b>合计最少台数</b>
                                        </td>
                                    </tr>

                                    <tr class="border">
                                        <td rowspan="6">十万用户(在线不超过1万)</td>
                                        <td class="confCol1">Tigase(通信)</td>
                                        <td class="confCol2">16核 32GB Intel Xeon E5-2682v4 2.5 GHz SSD 120G硬盘 带宽按量计费</td>
                                        <td class="confCol3" rowspan="3">共用1台</td>
                                        <td class="confCol3" rowspan="6">2台</td>
                                    </tr>
                                    <tr class="border">
                                        <td class="confCol1">MongoDB&amp;Redis<br>(数据库&amp;缓存)</td>
                                        <td class="confCol2">16核 32GB Intel Xeon E5-2682v4 2.5 GHz SSD 120G硬盘 只需机房内网</td>
                                        <!-- <td class="confCol3" >0~1</td> -->
                                    </tr>
                                    <tr class="border">
                                        <td class="confCol1">RocketMQ<br>(离线通知、XMPP通知)</td>
                                        <td class="confCol2">16核 32GB Intel Xeon E5-2682v4 2.5 GHz SSD 120G硬盘 只需机房内网</td>
                                        <!-- <td class="confCol3">0~1</td> -->
                                    </tr>
                                    <tr class="border">
                                        
                                        <td class="confCol1">Upload(上传)</td>
                                        <td class="confCol2">8核 32GB Intel Xeon E5-2682v4 2.5 GHz SSD 120G硬盘 带宽按量计费</td>
                                         <td class="confCol3" rowspan="3">共用1台</td>
                                    </tr>

                                    <tr class="border">
                                        
                                        <td class="confCol1">FastDFS(下载)</td>
                                        <td class="confCol2">8核 32GB Intel Xeon E5-2682v4 2.5 GHz SSD 120G硬盘 带宽按量计费</td>
                                        <!-- <td class="confCol3">1~2</td> -->
                                    </tr>
                                    
                                    <tr class="border">
                                        
                                        <td class="confCol1">Video(视频聊天)</td>
                                        <td class="confCol2">8核 32GB Intel Xeon E5-2682v4 2.5 GHz SSD 120G硬盘 带宽按量计费</td>
                                        <!-- <td class="confCol3">1~2</td> -->
                                    </tr>

                                
                                    <tr class="border">
                                        <td rowspan="6">百万用户(在线不超过10万)</td>
                                        <td class="confCol1">Tigase(通信)</td>
                                        <td class="confCol2">32核 128GB Intel Xeon E5-2682v4 2.5 GHz SSD 240G硬盘 带宽按量计费</td>
                                        <td class="confCol3">2~4</td>
                                        <td class="confCol3" rowspan="6">8台</td>
                                    </tr>
                                    <tr class="border">
                                        <td class="confCol1">MongoDB&amp;Redis<br>(数据库&amp;缓存)</td>
                                        <td class="confCol2">32核 128GB Intel Xeon E5-2682v4 2.5 GHz SSD 240G硬盘 只需机房内网</td>
                                        <td class="confCol3">1</td>
                                    </tr>
                                    <tr class="border">
                                        
                                        <td class="confCol1">RocketMQ<br>(离线通知、XMPP通知)</td>
                                        <td class="confCol2">16核 32GB Intel Xeon E5-2682v4 2.5 GHz SSD 240G硬盘 只需机房内网</td>
                                        <td class="confCol3">1</td>
                                    </tr>
                                    <tr class="border">
                                        
                                        <td class="confCol1">Upload(上传)</td>
                                        <td class="confCol2">16核 32GB Intel Xeon E5-2682v4 2.5 GHz SSD 240G硬盘 带宽按量计费</td>
                                        <td class="confCol3">1~2</td>
                                    </tr>
                                    
                                    <tr class="border">
                                        
                                        <td class="confCol1">Video(视频聊天)</td>
                                        <td class="confCol2">16核 32GB Intel Xeon E5-2682v4 2.5 GHz SSD 240G硬盘 带宽按量计费</td>
                                        <td class="confCol3">1~2</td>
                                    </tr>

                                    <tr class="border">
                                       
                                        <td class="confCol1">FastDFS(下载)</td>
                                        <td class="confCol2">16核 32GB Intel Xeon E5-2682v4 2.5 GHz SSD 240G硬盘 带宽按量计费</td>
                                        <td class="confCol3">2~10个节点</td>
                                    </tr>



                                    <tr class="border">
                                        <td rowspan="7">千万用户(在线不超过40万)</td>
                                        <td class="confCol1">Tigase(通信)</td>
                                        <td class="confCol2">64核 256GB Intel Xeon E5-2667v4 3.2 GHz SSD 512G硬盘 带宽按量计费</td>
                                        <td class="confCol3">4~10</td>
                                        <td class="confCol3" rowspan="7">20台</td>
                                    </tr>
                                    <tr class="border">
                                       
                                        <td class="confCol1">MongoDB(数据库)</td>
                                        <td class="confCol2">64核 256GB Intel Xeon E5-2667v4 3.2 GHz SSD 512G硬盘 只需机房内网</td>
                                        <td class="confCol3">1~2</td>
                                    </tr>
                                    <tr class="border">
                                       
                                        <td class="confCol1">Redis(缓存)</td>
                                        <td class="confCol2">32核 64GB Intel Xeon E5-2667v4 3.2 GHz SSD 512G硬盘 只需机房内网</td>
                                        <td class="confCol3">1~2</td>
                                    </tr>
                                    <tr class="border">

                                        <td class="confCol1">RocketMQ<br>(离线通知、XMPP通知)</td>
                                        <td class="confCol2">32核 64GB Intel Xeon E5-2667v4 3.2 GHz SSD 512G硬盘 只需机房内网</td>
                                        <td class="confCol3">1~2</td>
                                    </tr>
                                    <tr class="border">
                                        <td class="confCol1">Upload(上传)</td>
                                        <td class="confCol2">32核 64GB Intel Xeon E5-2667v4 3.2 GHz SSD 512G硬盘 带宽按量计费</td>
                                        <td class="confCol3">3~10</td>
                                    </tr>
                                    <tr class="border">
                                        <td class="confCol1">Video(视频聊天)</td>
                                        <td class="confCol2">32核 64GB Intel Xeon E5-2667v4 3.2 GHz SSD 512G硬盘 带宽按量计费</td>
                                        <td class="confCol3">2~8</td>
                                    </tr>
                                    <tr class="border">
                                        <td class="confCol1">FastDFS(下载)</td>
                                        <td class="confCol2">32核 64GB Intel Xeon E5-2667v4 3.2 GHz SSD 512G硬盘 带宽按量计费</td>
                                        <td class="confCol3">6~10节点</td>
                                    </tr>



                                    <tr class="border">
                                        <td rowspan="7">上亿用户(在线不超过200万)</td>
                                        <td class="confCol1">Tigase(通信)</td>
                                        <td class="confCol2">96核 512GB Intel Xeon Gold 6149（Skylake）3.1 GHz SSD 512G硬盘 带宽按量计费</td>
                                        <td class="confCol3">10~30</td>
                                        <td class="confCol3" rowspan="7">48台</td>
                                    </tr>
                                    <tr class="border">
                                       
                                        <td class="confCol1">MongoDB(数据库)</td>
                                        <td class="confCol2">96核 512GB Intel Xeon Gold 6149（Skylake）3.1 GHz SSD 512G硬盘 只需机房内网</td>
                                        <td class="confCol3">1~5</td>
                                    </tr>
                                    <tr class="border">
                                       
                                        <td class="confCol1">Redis(缓存)</td>
                                        <td class="confCol2">64核 64GB Intel Xeon Gold 6149（Skylake）3.1 GHz SSD 512G硬盘 只需机房内网</td>
                                        <td class="confCol3">1~5</td>
                                    </tr>

                                    <tr class="border">

                                        <td class="confCol1">RocketMQ<br>(离线通知、XMPP通知)</td>
                                        <td class="confCol2">64核 64GB Intel Xeon Gold 6149（Skylake）3.1 GHz SSD 512G硬盘 只需机房内网</td>
                                        <td class="confCol3">1~5</td>
                                    </tr>

                                    <tr class="border">
                                        <td class="confCol1">Upload(上传)</td>
                                        <td class="confCol2">64核 64GB Intel Xeon Gold 6149（Skylake）3.1 GHz SSD 512G硬盘 带宽按量计费</td>
                                        <td class="confCol3">10~30</td>
                                    </tr>
                                    
                                    <tr class="border">
                                        <td class="confCol1">Video(视频聊天)</td>
                                        <td class="confCol2">64核 64GB Intel Xeon Gold 6149（Skylake）3.1 GHz SSD 512G硬盘 带宽按量计费</td>
                                        <td class="confCol3">5~20</td>
                                    </tr>
                                    <tr class="border">
                                        <td class="confCol1">FastDFS(下载)</td>
                                        <td class="confCol2">64核 64GB Intel Xeon Gold 6149（Skylake）3.1 GHz SSD 512G硬盘 带宽按量计费</td>
                                        <td class="confCol1">20~100节点</td>
                                    </tr>
                                </tbody>
                            </table>
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
    components:{NavBar},
    name:"Compare"
}
</script>
<style scoped>
.title {
    font-family: "Microsoft YaHei",sans-serif;
    font-weight: normal;
    font-size: 24px;
    color: black;
}
.container{    width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;}
    ._table_0{
        width: 100%;
    padding: 0;
    margin: 0;
    color: black;
    text-align: center;
    }
    ._table_0 tr {
    height: 40px;
}
.tableHead {
    background-color: #55beb7;
}
.border td {
    border: 1px solid #e0e5eb;
    /* text-indent: 2em; */
}
.table-left {
    text-align: left;
    padding-left: 10px;
}
table {
    border-spacing: 0;
    border-collapse: collapse;
    font-size: 14px;
}
.border1 td {
    border-bottom: 0;
    border-left: 0;
}
.border2 td {
    border-bottom: 0;
    border-left: 0;
    border-top: 0;
}
</style>