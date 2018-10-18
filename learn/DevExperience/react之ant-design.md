1.wrappedComponentRef获取子组件的form表单值
	<BasicInfo wrappedComponentRef={(form) => this.offerForm = form} {...totalData} />
2.form之getFieldDecorator更新的原理是什么
answer:这个属于高阶函数，内部会调用onChange事件，这样form才会拿到这个高阶方法中的值,所以在这个高阶方法中(getFieldDecorator)调用组件，想要使组件中的值及时更新到form中，需要在组件中调用onChange事件. 这块我还是有点疑惑，为什么在ant-design的组件中 比如input就可以及时更新，但是自己写的组件就必须再次调用高阶函数中的onChange方法
