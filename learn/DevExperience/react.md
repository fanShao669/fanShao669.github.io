1.
react中input 只能输入数字  
answer:<Input onInput={(e) => e.target.value = e.target.value.replace(/[^\d]/g,'')} />

坑：我在这块花了好几个小时, 当初
解决方案1：是<Input onKeyUp={(e) => e.target.value = e.target.value.replace(/[^\d]/g,'')} />
这样处理的结果是  输入框输入非数字时候回一闪一闪的确实输入不上，但是我们再切换到其他输入框的情况下，会带出一个非数字，仍然会出错；

解决方案2:<Input type="number" onKeyUp={(e) => e.target.value = e.target.value.replace(/[^\d]/g,'')} />
结果:我输入数字然后输入非数字，之前输入的全部清除掉,这样用户体验不是很好

解决方案3：<Input onKeyPress={(e) => e.target.value = e.target.value.replace(/[^\d]/g,'')} />
这样无法解决。。。醉了醉了

解决方案4:<Input onInput={(e) => e.target.value = e.target.value.replace(/[^\d]/g,'')} />
这个解决方案完美解决;
英文状态下,输入数字可以，输入非数字，不是闪烁，切换到其他输入框也不会出现上个输入框出现的非 

知识点：
oninput 事件在用户输入时触发。
该事件在 <input> 或 <textarea> 元素的值发生改变时触发。
提示： 该事件类似于 onchange 事件。不同之处在于 oninput 事件在元素值发生变化是立即触发， onchange 在元素失去焦点时触发。另外一点不同是 onchange 事件也可以作用于 <keygen> 和 <select> 元素。
参考地址:
1.http://www.runoob.com/jsref/event-oninput.html
2.https://blog.csdn.net/freshlover/article/details/39050609

2.在文件中 组件文件名称小写，文件名称首字母大写；

3.react-from-wrappedComponentRef
表单验证，如果父组件想要验证子组件中的form表单值，
以前的做法是，在子组件中拿到form表单值，通过父组件的一个方法拿到这些值，这个看起来可以使用，但是总感觉有点不妥.
其实可以使用 wrappedComponentRef={(form) => this.offerForm = form}  
eg 父组件调用BasicInfo， <BasicInfo wrappedComponentRef={(form) => this.offerForm = form} {...totalData} /> 这样就可以获取到BasicInfo中的form表单值；

4.

