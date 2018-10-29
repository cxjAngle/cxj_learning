<script>
    export default {
      render: function(createElement) {
        return createElement(
          "h" + this.level, // tag name 标签名称
          {
            class: {
              foo: true,
              bar: false
            },
            style: {
              color: "red",
              fontSize: "14px"
            },
            attrs: {
              id: "foo"
            },
            on: {
              click: this.clickHandler,
            //   keyUp:this.clickHandler,
            }
          },
          [
            this.$slots.default,
            createElement(
              "input",
              // DOM 属性
              {
                domProps: {
                    value: this.level,
                  innerHTML: "baz"
                },
                style:{
                    border: '1px solid #333'
                },
                on: {
                    'input': this.inputHandler,
                }
               
              },
              "一则头条"
            )
          ],
          this.$slots.default // 子组件中的阵列
          // this.$slots.aa // 子组件中的阵列
        );
      },
      props: {
        level: {
          type: Number,
          required: true
        }
      },
      methods: {
        clickHandler(e) {

          console.log("clickHandler", e.target.innerHTML);
        },
        inputHandler(e){
            console.log("inputHandler", e , e.target.value)
        }
      }
    };
</script>
<style scoped>
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 26px;
    }
    h3 {
      font-size: 22px;
    }
    h4 {
      font-size: 18px;
    }
</style>

