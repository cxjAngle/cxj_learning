<template>
	<el-pagination background layout="prev, pager, next, total" :total="total" :page-size="pageSize" @current-change="handleCurrentChange" :current-page.sync="curPage"	>
	</el-pagination>
</template>
<script>
	export default {
	  props: {
	    //   当前页码
	    pageIndex: {
	      type: Number,
		  default: 0,
		  required:true
	    },
	    //   每页显示条数
	    pageSize: {
	      type: Number,
		  default: 6,
		  required:true
	    },
	    //   总记录数
	    total: {
		  type: Number,
		  required:true
	    }
	  },
	  data() {
	    return {
			curPage:this.pageIndex
		};
	  },
	  methods: {
	    handleCurrentChange() {
			// 从el-pagination传出来的当前page
			this.$emit("change", (this.curPage-1)*this.pageSize);
	    }
	  }
	};
</script>
<style scoped>
	.page-container {
	  margin: 20px auto;
	}
</style>


