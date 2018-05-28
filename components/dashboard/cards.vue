<template>
    
   <div class="col-lg-6 col-sm-12 col-xs-12">
                        <div class="row">
                            <div class="col-lg-6 col-sm-6 col-xs-12">
                                <div class="white-box">
                                    <h3 class="box-title">CLIENTS</h3>
                                    <ul class="list-inline m-t-30 p-t-10 two-part">
                                        <li><i class="icon-people text-info"></i></li>
                                        <li class="text-right"><span class="counter">{{newClients.total}}</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-6 col-xs-12">
                                <div class="white-box">
                                    <h3 class="box-title">EXCHANGES</h3>
                                    <ul class="list-inline m-t-30 p-t-10 two-part">
                                        <li><i class="icon-folder text-purple"></i></li>
                                        <li class="text-right"><span class="counter">{{newProjects.total}}</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-6 col-xs-12">
                                <div class="white-box">
                                    <h3 class="box-title">ONLINE</h3>
                                    <ul class="list-inline m-t-30 p-t-10 two-part">
                                        <li><i class="icon-folder-alt text-danger"></i></li>
                                        <li class="text-right"><span class="">{{openProjects.total}}</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-6 col-xs-12">
                                <div class="white-box">
                                    <h3 class="box-title">LAST UPDATE</h3>
                                    <ul class="list-inline m-t-30 p-t-10 two-part">
                                        <li><i class="ti-wallet text-success"></i></li>
                                        <li class="text-right"><span class="">{{newInvoices.total}}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>



</template>

<script>
    export default {
        data() {
            return {
          
            newClients:{total:'255'},
            newProjects:{total:'255'},
            newInvoices:{total:'255'},
            openProjects:{total:'255'},


            }
        },

        created() {
       
             


        }


    }


</script>




