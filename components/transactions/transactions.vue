<template>
    <div>
        <div class="col-sm-6" v-for="tra in transactions" :key="tra._id">
            <div class="white-box">
                <span class='text-muted'><i class='ti-time'></i> {{tra.date}}</span>

                <h4 class="box-title">OUT</h4>
                <h3 class="box-title"><img class="img-circle" :src="tra.inner.logo"/>{{tra.outer.bank}}</h3>

                <div class="table-responsive">
                    <table class="table color-table info-table">
                        <thead>
                        <tr>
                            <th>Sum</th>
                            <th>Backward</th>
                            <th>Currency</th>
                            <th>Total</th>
                        </tr>

                        </thead>
                        <tbody>
                        <tr>
                            <td>{{tra.outer.sum}}</td>
                            <td>{{tra.outer.back}}</td>
                            <td>{{tra.outer.currency}}</td>
                            <td>{{tra.outer.total}}</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
                <h4 class="box-title">IN</h4>
                <h3 class="box-title"><img class="img-circle" :src="tra.inner.logo"/>{{tra.inner.bank}}</h3>
                <div class="table-responsive">
                    <table class="table color-table success-table">
                        <thead>
                        <tr>

                            <th>Sum</th>
                            <th>Backward</th>
                            <th>Currency</th>
                            <th>Total</th>
                        </tr>

                        </thead>
                        <tbody>
                        <tr>
                            <td>{{tra.inner.sum}}</td>
                            <td>{{tra.inner.back}}</td>
                            <td>{{tra.inner.currency}}</td>
                            <td>{{tra.inner.total}}</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
                <hr/>
                <div class="row">
                    <div class="col-lg-6 col-sm-12" style="width:100%">
                        <div class="white-box">
                            <div class="button-box">
                                <button class="fcbtn btn btn-success btn-outline btn-1b">ok</button>
                                <button class="fcbtn btn btn-info btn-outline btn-1b">not paid</button>
                                <button class="fcbtn btn btn-info btn-outline btn-1b">return</button>
                                <button class="fcbtn btn btn-danger btn-outline btn-2b">in trash</button>
                            </div>
                        </div>
                    </div>
                </div>
                <span class='text-muted'>TRANSACTION ID: {{tra.id}}</span>
            </div>
        </div>
</div>

</template>

<script>
    export default {
        props:['transactions']
    }
</script>

<style scoped>
    .col-sm-6 {
        width: 100%;
    }

    h3 img {
        width: 35px;
        margin: 5px;
        height: 35px;
    }

    input {
        margin: 15px;
        border: 1px;
        border-radius: 20px;
        padding: 4px;
        color: grey;
    }
</style>
