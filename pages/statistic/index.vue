<template>
  <div class="row">
                    <div class="col-md-12 col-sm-12 col-lg-6">
                        <div class="white-box">
                            <div class="row">
                                <div class="col-xs-6">
                                    <h2 class="m-b-0 font-medium">$354.50</h2>
                                    <h5 class="text-muted m-t-0">160 Sales</h5></div>
                                <div class="col-xs-6">
                                    <div id="ct-bar-chart" class="pull-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-lg-6">
                        <div class="white-box">
                            <div class="row">
                                <div class="col-xs-6">
                                    <h2 class="m-b-0 font-medium">$354.50</h2>
                                    <h5 class="text-muted m-t-0">160 Sales</h5></div>
                                <div class="col-xs-6">
                                    <div id="ct-extra" style="height: 70px" class="pull-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <div class="col-md-12 col-sm-12 col-lg-6">
                        <div class="white-box">
                            <div class="row">
                                <div class="col-xs-6">
                                    <h2 class="m-b-0 font-medium">$354.50</h2>
                                    <h5 class="text-muted m-t-0">160 Sales</h5>
                                </div>
                                <div class="col-xs-6">
                                    <div id="ct-extra" style="height: 70px" class="pull-right"></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    

                             <div class="btn-group m-r-10">
                                    <button aria-expanded="false" data-toggle="dropdown" class="btn btn-info dropdown-toggle waves-effect waves-light" type="button">Today <span class="caret"></span></button>
                                    <ul role="menu" class="dropdown-menu animated flipInX">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else here</a></li>
                                        <li class="divider"></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                </div>


                    
                    
                </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .col-lg-6 {
    width: 30%;
    padding-left: 0;
    padding-right: 0;
  }
  .select{
    width:10%;
  }

  .col-lg-6 .white-box {
    border: 1px solid rgba(250, 250, 250, 1);
  }

  @media screen and (max-width:700px) {
    .col-lg-6 {
      width: 100%;
    }
  }
</style>
