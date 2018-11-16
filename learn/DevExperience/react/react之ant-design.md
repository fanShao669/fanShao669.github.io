1.wrappedComponentRef获取子组件的form表单值
	<BasicInfo wrappedComponentRef={(form) => this.offerForm = form} {...totalData} />
2.form之getFieldDecorator更新的原理是什么
answer:这个属于高阶函数，内部会调用onChange事件，这样form才会拿到这个高阶方法中的值,所以在这个高阶方法中(getFieldDecorator)调用组件，想要使组件中的值及时更新到form中，需要在组件中调用onChange事件. 这块我还是有点疑惑，为什么在ant-design的组件中 比如input就可以及时更新，但是自己写的组件就必须再次调用高阶函数中的onChange方法

3.tabs这个组件， tabPane中不能放内容，这样的话由于state和props更新多次导致会render很多次，性能不好,直接体现的是UI的效果不好，切换tab的时候会出现白屏效果
解决方法:(把内容放在和tabs同级)
<Tabs onChange={this.changeTab}>
	{this.TabPaneList.map((item,index) => <TabPane tab={item.title} key={item.key} className="u-tabPane"></TabPane>)}
</Tabs>
<Spin spinning={isFetching}>
	{interviewInfo && interviewInfo.map(item => 
		<CardList
			{...this.state}
			key={item.applyId}
			title = {this.renderTitle(item)}
			columns = {this.renderCardListContent(item,applyStatus)}
			extra={<div>{this.setOperateBtn(applyStatus,this.btnListSection(item.buttonFlag,applyStatus,item))}</div>}
			footer={<Button style={{marginTop:'20px'}} className="fr" onClick={()=>this.evIsShowModal('updateInterview',true,'add',item)}>+添加面试安排</Button>}
		/>
	)}
	{pagination && pagination.total > 0 && <CustomPagination {...pagination} change={this.changeTable} />}
</Spin>