<template><!--galley start-->
    <section id="gallery" class="gallery">
        <div class="container">
            <div class="gallery-details">
                <div class="gallary-header text-center">
                    <h2>Book Transport</h2>
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
                                                <label for="email-id-vertical">Check In Date</label>
                                                <input type="date" @change="calPrice" id="email-id-vertical" className="form-control" v-model="formData.check_in_date" />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group">
                                                <label for="email-id-vertical">Check Out Date</label>
                                                <input type="date" @change="calPrice" id="email-id-vertical" className="form-control" v-model="formData.check_out_date" />
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
    name: "Transport_Booking",
    data() {
      return {
        formData: {
          customer_id: sessionStorage.getItem('uid'),
          package_id: this.$route.params.id,
          person:'',
          check_in_date:'',
          check_out_date:'',
          fare:this.$route.params.price,
          total:''
        },
      };
    },
    methods: {
      submitForm() {
        DataService.bookTransport(this.formData)
        .then(r => {
            if(r){
                console.log(r);
                //window.location.href='/Mail';
            }
        })
        .catch(e => {
          console.log(e);
        });
      },
      calPrice(){
        let person=this.formData.person
        let check_in_date = new Date (this.formData.check_in_date)
        let check_out_date = new Date (this.formData.check_out_date)
        let date1 = new Date(check_in_date);
        let date2 = new Date(check_out_date);
        let diff = new Date(date2.getTime() - date1.getTime());
        let numberofday = diff.getUTCDate() - 1;
console.log(numberofday)
        let fare=this.$route.params.price
        this.formData.total=(parseFloat(person) * parseFloat(numberofday)) * parseFloat(fare)
      }
    },
  };
</script>