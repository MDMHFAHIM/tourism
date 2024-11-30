<template><!--galley start-->
    <section id="gallery" class="gallery">
        <div class="container">
            <div class="gallery-details">
                <div class="gallary-header text-center">
                    <h2>Book Package</h2>
                </div><!--/.gallery-header-->
                <div class="gallery-box">
                    <div class="gallery-content"><div class="filtr-container"></div>
                        <div className="main-content container-fluid">
                            <form className="form form-vertical">
                                <div className="form-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label for="email-id-vertical"> Person</label>
                                                <input type="text" v-model="formData.person" className="form-control"/>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group">
                                                <label for="number_of_guest_adult">Number_Of_Guest_Adult</label>
                                                <input type="text" @keyup="calPrice" id="number_of_guest_adult" className="form-control" v-model="formData.number_of_guest_adult" />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group">
                                                <label for="number_of_guest_child"> Number_Of_Guest_Child </label>
                                                <input type="text" @change="calPrice" id="number_of_guest_child" className="form-control" v-model="formData.number_of_guest_child" />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group">
                                                <label for="email-id-vertical">Check_In_Date</label>
                                                <input type="date" id="email-id-vertical" className="form-control" v-model="formData.check_in_date" />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group">
                                                <label for="email-id-vertical">Fare</label>
                                                <input type="text" id="email-id-vertical" className="form-control" readonly v-model="formData.fare"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label for="email-id-vertical">Total</label>
                                                <h4>{{ formData.total }}</h4>
                                            </div>
                                        </div>

                                        <div className="col-12 d-flex justify-content-end">
                                            <button @click="submitForm" type="button" className="btn btn-primary mr-1 mb-1">Submit</button>
                                            <button type="reset" className="btn btn-light-secondary mr-1 mb-1">Reset</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

  <script>
    import DataService from "../services/DataService";
  export default {
    name: "Package_Booking",
    data() {
      return {
        formData: {
          customer_id: sessionStorage.getItem('uid'),
          package_id: this.$route.params.id,
          person:'',
          number_of_guest_adult:0,
          number_of_guest_child:0,
          check_in_date:'',
          fare:this.$route.params.price,
          total:''
        },
      };
    },
    methods: {
      submitForm() {
        DataService.bookPackage(this.formData)
        .then(r => {
            if(r){
                window.location.href='/Mail';
            }
          
        })
        .catch(e => {
          console.log(e);
        });
      },
      calPrice(){
        let adult=this.formData.number_of_guest_adult
        let child=this.formData.number_of_guest_child
        let fare=this.$route.params.price
        this.formData.total=(parseFloat(adult) + (parseFloat(child)/2)) * parseFloat(fare)

      }
    },
  };
</script>