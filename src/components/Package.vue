<template>
	<!--packages start-->
	<section id="pack" class="packages">
		<div class="container">
			<div class="gallary-header text-center">
				<h2>
					Amazing Tour Package
				</h2>
				<p>
					Duis aute irure dolor in  velit esse cillum dolore eu fugiat nulla.  
				</p>
			</div><!--/.gallery-header-->
			<div class="packages-content">
				<div class="row">

					<div v-for="p in alldata" :key="p.id" class="col-md-4 col-sm-6">
						<div class="single-package-item">
							<img :src='"http://127.0.0.1:8000/package/"+p.image' alt="package-place">
							<div class="single-package-item-txt">
								<h3>{{p.name}} <span class="pull-right">{{p.price}}</span></h3>
								<div class="packages-para">
									<p>
										<span>
											<i class="fa fa-angle-right"></i> {{p.duration}}
										</span>
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
									<a :href="'/Package_Booking/'+p.id+'/'+p.price" class="about-view packages-btn">
										book now
									</a>
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
  name: 'Package',
  data() {
    return {
      alldata:[]
    };
  },
  methods: {
    packages() {
       DataService.package()
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
    this.packages();
  }
}
</script>