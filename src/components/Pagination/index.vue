<template>
  <div class="pagination">
    <!-- 当前页码等于1就不可操作 -->
    <button :disabled="mcPage===1" @click="changeCurrentPage(mcPage-1)">上一页</button>
    <!-- 只有start大于1 -->
    <button v-if="startEnd.start>1" @click="changeCurrentPage(1)">1</button>
    <!-- 只有start大于2 -->
    <button disabled v-if="startEnd.start>2">···</button>

    <!-- 连续页码 -->
    <button v-for="item in startEndArr" :key="item"
      @click="changeCurrentPage(item)" :class="{active: mcPage===item}">
      {{item}}
    </button>
    <!-- 只有end<totalPages-1才显示  -->
    <button disabled v-if="startEnd.end<totalPages-1">···</button>
    <!-- 只有end<totalPages才显示 -->
    <button v-if="startEnd.end<totalPages" @click="changeCurrentPage(totalPages)">{{totalPages}}</button>
    <!-- 当前页码等于总页码就不可操作 -->
    <button :disabled="mcPage===totalPages" @click="changeCurrentPage(mcPage+1)">下一页</button>
    <!-- 总记录数 -->
    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    props:{
        currentPage: { // 当前页码
        type: Number,
        default: 1
      },
      pageSize: { // 每页数量
        type: Number,
        default: 5
      },
      total: { // 总数量
        type: Number,
        default: 0
      },
      showPageNo: { // 连续页码数
        type: Number,
        default: 5,
        validator:function(value){
            return value%2===1
        }
      }

    },
    data () {
      return {
        mcPage: this.currentPage // 保存自己的当前页码
      }
    },
    watch:{
        currentPage(value){
            this.mcPage=value
        }
    },
    computed:{
        // 总页数totalPages
        totalPages(){
            const {total,pageSize}=this
            return Math.ceil(total/pageSize)
        },
        startEnd(){
            let start,end;
             const {currentPage,showPageNo,totalPages}=this
             start=currentPage-Math.floor(showPageNo/2)
             if(start<1){
                 start=1
             }
             end=start+showPageNo-1
             if(end>totalPages){
                 end=totalPages
                 start=end-showPageNo+1
             }
             if(start<1){
                 start=1
             }


            return {start,end};
        },
        // 包含从start到end的数组
        startEndArr(){
            let arr=[];
            const {start,end}=this.startEnd
            for (let i = start; i < end; i++) {
                arr.push(i)
            }
            return arr;
        }
    },
    methods:{
        changeCurrentPage(page){
            if(page===this.mcPage) return
            this.mcPage=page
            this.$emit('currentChange',page)
        }
    }
  }
</script>
<style lang="less">
    
  .pagination {
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }

</style>
