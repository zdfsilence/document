<style lang="scss">
.left-col {
    background: #fff;
    width: 300px;
    position: fixed;
    opacity: 1;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
    height: 100%;
    z-index: 999;
}
</style>
<template>
    <div class="left-col">
        <div class="overlay"></div>
        <div class="intrude-less">
        	<header id="header" class="inner">
        		<a href="/" class="profilepic">
        			<img src="/assets/blogImg/litten.png" class="js-avatar">
        		</a>

        		<hgroup>
        		  <h1 class="header-author"><a href="/">Litten</a></h1>
        		</hgroup>


        		<p class="header-subtitle">胆小认生，不易相处</p>


        		<nav class="header-menu">
        			<ul>

        				<li><a href="/">主页</a></li>

        				<li><a href="/photos">相册</a></li>

        			</ul>
        		</nav>
        		<nav class="header-smart-menu">
        			<a q-on="click: openSlider(e, 'innerArchive')" href="javascript:void(0)">所有文章</a>
        			<a q-on="click: openSlider(e, 'aboutme')" href="javascript:void(0)">关于我</a>
        		</nav>
        		<nav class="header-nav">
        			<div class="social">

        					<a class="github" target="_blank" href="https://github.com/litten" title="github"><i class="icon-github"></i></a>

        					<a class="weibo" target="_blank" href="http://weibo.com/litten225" title="weibo"><i class="icon-weibo"></i></a>

        					<a class="rss" target="_blank" href="/atom.xml" title="rss"><i class="icon-rss"></i></a>

        			</div>
        		</nav>
        	</header>
        </div>

    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>
