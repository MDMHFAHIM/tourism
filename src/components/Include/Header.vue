<template>
  
<!-- main-menu Start -->
		<header class="top-area">
			<div class="header-area">
				<div class="container">
					<div class="row">
						<div class="col-sm-2">
							<div class="logo">
								<a href="index.html">
									tour<span>Nest</span>
								</a>
							</div><!-- /.logo-->
						</div><!-- /.col-->
						<div class="col-sm-10">
							<div class="main-menu">
							
								<!-- Brand and toggle get grouped for better mobile display -->
								<div class="navbar-header">
									<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
										<i class="fa fa-bars"></i>
									</button><!-- / button-->
								</div><!-- /.navbar-header-->
								<div class="collapse navbar-collapse">		  
									<ul class="nav navbar-nav navbar-right">
										<li class="smooth-menu"><a href="/home">Home</a></li>
										<li class="smooth-menu"><a href="/destination">Destination</a></li>
										<li class="smooth-menu"><a href="/package">Package </a></li>
										<li class="smooth-menu"><a href="/transport">Transport </a></li>
										<li class="smooth-menu"><a href="/blog">Blog</a></li>
										<li class="smooth-menu"><a href="/offer">Offer</a></li>
										
										<li>
											<!-- Button: Join Now -->
                                            <button v-if="uid" className='btn-primary' @click="logout">  Logout</button> 
                                            <router-link v-if="uid" :to="'/customer/'" class="nav-item nav-link"></router-link>
                                            <a v-if="!uid" href="/login" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"> <i className="fa fa-arrow-right ms-3"></i>Join Now</a>
										</li><!--/.project-btn--> 
									</ul>
								</div><!-- /.navbar-collapse -->
							</div><!-- /.main-menu-->
						</div><!-- /.col-->
					</div><!-- /.row -->
					<div class="home-border"></div><!-- /.home-border-->
				</div><!-- /.container-->
			</div><!-- /.header-area -->

		</header><!-- /.top-area-->
		<!-- main-menu End -->

</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      uid:sessionStorage.getItem('uid')
    };
  },
  props: {
    msg: String
  },
  methods: {
    logout() {
      this.uid="";
      sessionStorage.setItem('uid', '');
      window.location.reload();
    }
  }
}
</script>