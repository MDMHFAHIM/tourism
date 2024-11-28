<template>
    

		<!--transport start-->
		<section id="pack" class="packages">
			<div class="container">
				<div class="gallary-header text-center">
					<h2>
						Marvelous Transport
					</h2>
					<p>
						Duis aute irure dolor in  velit esse cillum dolore eu fugiat nulla.  
					</p>
				</div><!--/.gallery-header-->
				<div class="packages-content">
					<div class="row">

						<div v-for="p in alldata" :key="p.id" class="col-md-4 col-sm-6">
						<div class="single-package-item">
							<img :src='"http://127.0.0.1:8000/transport/"+p.image' alt="package-place">
							<div class="single-package-item-txt">
								<h3>{{p.vehicle}} <span class="pull-right">{{p.price}}</span></h3>
								<div class="packages-para">
									<p>
										<span><i class="fa fa-angle-right"></i> Full Day / Week</span>
										
										<i class="fa fa-angle-right"></i>  {{p.location}} 
									</p>
									<p>
										<span>
											<i class="fa fa-angle-right"></i>  transportation
										</span>
										<i class="fa fa-angle-right"></i>  food facilities
										</p>


								</div><!--/.packages-para-->
								
								<div class="about-btn">
									<button  class="about-view packages-btn">
										book now
									</button>
								</div><!--/.about-btn-->
							</div><!--/.single-package-item-txt-->
						</div><!--/.single-package-item-->

					</div><!--/.col-->

				</div><!--/.row-->
			</div><!--/.packages-content-->
		</div><!--/.container-->

	</section><!--/.packages-->
	<!--packages end-->
</template>
<script>
import DataService from "../services/DataService";
//import router from '@/router';
export default {
  name: 'Transport',
  data() {
    return {
      alldata:[]
    };
  },
  methods: {
    transport() {
       DataService.transport()
        .then(response => {
          console.log(response.data)
          if(response.data)
            this.alldata= response.data.data;
          else
            alert(response.data.error)
        })
        .catch(e => {
          console.log(e);
      });
    }
  }, mounted() {
    this.transport();
  }
}
</script>