<template>
    <section>
        <div class="logo-container-body">
            <div class="character">
                <div class="left-eye"></div>
                <div class="left-chin"></div>
                <div class="right-chin"></div>
                <div class="right-eye"></div>
                <div class="mouth">
                    <div class="mouth-tough"></div>

                </div>
            </div>
        </div>

        <div class="logo-container">
            <div class="left-cover"></div>
            <div class="right-cover"></div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Logo",
    }
</script>

<style scoped>

    .left-cover {
        z-index: 90;
        position: absolute;
        width: 300px;
        bottom: -77%;
        left: -20%;
        -webkit-transform: rotate(-48deg);
        transform: rotate(-48deg);
        height: 500px;
        background-color: #03a9f4;
    }


    .right-cover {
        z-index: 90;
        position: absolute;
        width: 300px;
        bottom: -66%;
        left: 66%;
        -webkit-transform: rotate(-48deg);
        transform: rotate(52deg);
        height: 500px;
        background-color: #29789b;
    }

    .logo-container {
        position: relative;
        overflow: hidden;
        width: 350px;
        height: 350px;
        background-color: #19102c;
    }
    .logo-container-body {
        position: absolute;
        width: 350px;
        height: 350px;
        background-color: #a49eb3;
    }

    .character {
        z-index: 10;
        overflow: hidden;
        position: absolute;
        width: 90%;
        border-radius: 9px;
        top: 30px;
        left: 17px;
        margin: 0 auto;
        height: 320px;
        background-color: white;
        animation: form-out 0.25s forwards;
    }
    .character:hover{
        cursor: pointer;
        animation: form-on 0.25s forwards;
    }
    .character:hover >.mouth{
        animation: mouth-happy .05s forwards;
    }
    .character:hover .mouth-tough{
        animation: mouth-tough-happy .05s forwards;
    }

    .left-eye {
        position: absolute;
        width: 35px;
        height: 35px;
        top: 34%;
        left: 23%;
        border-radius: 100px;
        background-color: #2c3e50;
    }

    .left-chin{
        position: absolute;
        width: 23px;
        height: 23px;
        top: 52%;
        left: 23%;
        border-radius: 100px;
        background-color: #ececec;
    }

    .right-chin{
        position: absolute;
        width: 23px;
        height: 23px;
        top: 52%;
        right: 23%;
        border-radius: 100px;
        background-color: #ececec;
    }


    .right-eye {
        position: absolute;
        width: 35px;
        height: 35px;
        top: 34%;
        right: 23%;
        border-radius: 100px;
        background-color: #2c3e50;
    }

    .mouth {
        overflow: hidden;
        width: 16%;
        height: 5%;
        border-radius: 0 0 100px 100px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        position: absolute;
        bottom: 40%;
        left: 71%;
        margin-left: -30%;
        background: #2c3e50;
        transition: all 300ms cubic-bezier(0.645, 0.045, 0.338, 1);
        transform: rotate(180deg);
    }

    .mouth-tough{
        width: 68%;
        height: 38%;
        border-radius: 0 0 100px 100px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        position: absolute;
        bottom: 60%;
        -webkit-transform: rotate(180deg);
        transform: rotate(0deg);
        left: 51%;
        margin-left: -30%;
        background: #e6b125;
        -webkit-transition: all 300ms cubic-bezier(0.645, 0.045, 0.338, 1);
        transition: all 300ms cubic-bezier(0.645, 0.045, 0.338, 1);
    }
    @keyframes form-on {

        from {
            top: 0;
        }
        to {
            top: -30px;
        }
    }
    @keyframes form-out {

        from {
            top: -30px;
        }
        to {
            top: 0;
        }
    }

  @keyframes mouth-happy {
      from {
          transform: rotate(180deg);
          height: 5%;
      }
      to {
          transform: rotate(0deg);
          height: 10%;

      }
  }
      @keyframes mouth-tough-happy {
          from{
              bottom: 52%;
              transform: rotate(0deg);
              left: 51%;
          }
          to{
              bottom: -4%;
              transform: rotate(180deg);
              left: 45%;
          }
      }


</style>