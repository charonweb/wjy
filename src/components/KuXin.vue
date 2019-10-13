<template>
    <div class="hello">
      <nav-bar></nav-bar>
			  <div><img src="../../src/assets/banner/imBaner.png" alt="" style="width:100%"></div>
              <div class="title text-center" style="margin:4rem 0 2rem 0;font-size:24px">
                  <span style="color:#E7E6E6;margin-right: 20px;border-top: 1px solid rgba(0,0,0,.1);position: relative;top: 17px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                为何要100%完全自研“酷信”？
                  <span style="color:#E7E6E6;margin-left: 20px;border-top: 1px solid rgba(0,0,0,.1);position: relative;top: 17px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              </div>
              <div class="_container" style="margin-top: 20px; margin-bottom: 20px;">
                            <div class="_row_0">
                                <table class="_table_0">
                                    <tbody>
                                        <tr class="border tableHead" style="">
                                            <td width="30%">
                                                <b>名称</b>
                                            </td>
                                            <td width="35%">
                                                <strong>酷信即时通讯(以下简称“酷信”)</strong>
                                            </td>
                                            <td width="35%">
                                                <strong>视酷即时通讯(以下简称“视酷”)</strong>
                                            </td>
                                        </tr>
                                        <!-- 通用功能 -->
                                        <!-- <tr class="border">
                                            <td rowspan="29">
                                                <b>通用功能
                                                    <b></b>
                                                </b>
                                            </td>
    
                                            <td >长文本消息</td>
                                            <td class="table-left">支持纯文字消息的发送，最长文本长度可达8K</td>
                                           
                                        </tr>
                                        <tr class="border">
                                            <td >图片消息</td>
                                            <td class="table-left">支持所有格式的图片消息的发送</td>
                                        </tr> -->
                                        <tr class="border">
                                            <td>网络框架</td>
                                            <td>Java的AIO(TCP长连接)</td>
                                            <td>Java的NIO(TCP长连接)</td>
                                        </tr>
                                        <tr class="border">
                                            <td>交互控制协议</td>
                                            <td>自定义协议简单明了</td>
                                            <td>XMPP协议繁多复杂</td>
                                        </tr>
                                        <tr class="border">
                                            <td>包格式</td>
                                            <td>基于<a href="https://www.jianshu.com/p/2265f56805fa">Protobuf</a>的二进制字节格式，包极小</td>
                                            <td>基于XML的文本标签格式，包较大</td>
                                           
                                        </tr>
                                        <tr class="border">
                                            <td>包体积</td>
                                            <td>数据量小，传输速度快，带宽占用低</td>
                                            <td>数据包大，传输速度慢，带宽占用高</td>
                                        
                                        </tr>
    
                                        <tr class="border">
                                                <td style="color: red;">并发数</td>
                                                <td style="color: red;">大约是视酷的2-5倍</td>
                                                <td style="color: red;">单台服务器并发10万用户左右</td>
                                           
                                        </tr>

                                        <tr class="border">
                                                <td>连接速度</td>
                                                <td>优于视酷</td>
                                                <td>弱网比较慢</td>
                                        </tr>
    
                                        <tr class="border">
                                                <td>发送速度</td>
                                                <td>优于视酷</td>
                                                <td>弱网比较慢</td>
                                        </tr>
    
                                        <tr class="border">
                                                <td>回执速度</td> 
                                                <td>优于视酷，且支持批量</td>
                                                <td>弱网回执慢</td>
                                        </tr>
    
                                        <!-- <tr class="border">
                                                <td>丢包率</td>
                                                <td>无发现丢包（或丢包极少）</td>
                                                <td>弱网丢包多</td>
                                        </tr> -->
    
                                        <tr class="border">
                                                <td>组包支持</td>
                                                <td>多个消息包组合统一发送节约带宽</td>
                                                <td>多个消息包逐一发送</td>
                                        </tr>
    
                                        <tr class="border">
                                                <td>协议自由度</td>
                                                <td>扩展性好,可自定义协议</td>
                                                <td>必须遵循XMPP的协议标准</td>
                                        </tr>
    
                                        <tr class="border">
                                                <td>群组区别</td>
                                                <td>登录时不需要客户端每个群组发协议进行连接</td>
                                                <td>登录时需要客户端每个群组发协议进行连接</td>
                                        </tr>
    
                                        <tr class="border">
                                                <td>群组消息新数量</td>
                                                <td>显示准确的总数量</td>
                                                <td>最多显示99+</td>
                                        </tr>
    
    
                                        <tr class="border">
                                                <td>账号区别</td>
                                                <td>只需要在业务系统注册帐号</td>
                                                <td>需同时在业务系统+XMPP系统里注册帐号</td>
                                           
                                        </tr>
    
                                      <!--  <tr class="border">
                                                <td>客户端登陆</td>
                                                <td>基于系统token登陆</td>
                                                <td>基于账号密码登陆客户端需要保存密码</td> 
                                        </tr>-->
    
                                        <tr class="border">
                                                <td>数据库存储</td>
                                                <td>分库分表存储效率快</td>
                                                <td>单表存储效率慢</td> 
                                        </tr>
                                        <tr class="border">
                                                <td>集成效率</td>
                                                <td>框架简单集成效率快</td>
                                                <td>框架复杂集成效率慢</td> 
                                        </tr>
                                        <tr class="border">
                                            <td>前后端功能</td>
                                            <td>和视酷即时通讯功能一模一样</td>
                                            <td>功能齐全</td>
                                        </tr>
                                        <tr class="border">
                                            <td>集群插件</td>
                                            <td>按通讯服务器台数收费(每50万用户需要一台,授权码模式)</td>
                                            <td>按通讯服务器台数收费(每50万用户需要一台)</td>
                                        </tr>
                                        <tr class="border">
                                            <td style="color: red">自主研发</td>
                                            <td style="color: red">前后端100%完全自主研发</td>
                                            <td style="color: red">服务端基于Tigase开源项目大量修改</td>
                                        </tr>
                                        <tr class="border">
                                            <td style="color: red">开源程度</td>
                                            <td style="color: red">服务端通讯不开源(UI层、业务层、客户端通讯层等均开源)</td>
                                            <td style="color: red">全部开源(包括UI层、业务层、通讯层等)</td>
                                        </tr>
                                        <tr class="border">
                                            <td style="color: red">开源占比</td>
                                            <td style="color: red">98%(服务端封装了用于通讯的静态库JAR包，不影响二开)</td>
                                            <td style="color: red">100%(没有任何自己封装的静态库)</td>
                                        </tr>
                                        <tr class="border">
                                            <td style="color: red">产品价格</td>
                                            <td style="color: red">和视酷定价一模一样</td>
                                            <td style="color: red">分设备端定价，<a href="price.html">价格表</a></td>
                                        </tr>
                                    </tbody>
                                </table>
    
                            </div>
                        </div>
    </div>
</template>
<script>
import NavBar from '@/components/NavBar'
export default {
    components:{NavBar},
    name:"KuXin"
}
</script>
<style scoped>
.title{    font-weight: normal;
    font-size: 24px;
    color: black;
}
._container {
    width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
}
._row_0 {
    background-color: #F3FEFA;
    padding: 5px;
    margin: 0 auto;
}
._table_0 {
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
b, strong {
    font-weight: 700;
}
</style>