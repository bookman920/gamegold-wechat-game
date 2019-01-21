const screenWidth  = window.innerWidth
const screenHeight = window.innerHeight

let atlas = new Image()
atlas.src = 'images/Common.png'

export default class GameInfo {
  renderGameScore(ctx, score) {
    ctx.fillStyle = "#ffffff"
    ctx.font      = "20px Arial"

    ctx.fillText(
      score,
      10,
      30
    )
  }

  renderGameAddr(ctx, addr) {
    ctx.fillStyle = "#ffffff"
    ctx.font = "12px Arial"

    ctx.fillText(
      "addr: "+addr,
      10,
      50
    )
  }

  renderGameCId(ctx, cid) {
    ctx.fillStyle = "#ffffff"
    ctx.font = "12px Arial"

    ctx.fillText(
      "cid: "+cid,
      10,
      70
    )
  }

  renderGameRecharge(ctx) {

  }

  renderGameOver(ctx, score, personalHighScore) {
    ctx.drawImage(atlas, 0, 0, 119, 108, screenWidth / 2 - 150, screenHeight / 2 - 100, 300, 330)

    ctx.fillStyle = "#ffffff"
    ctx.font    = "20px Arial"

    ctx.fillText(
      '游戏结束',
      screenWidth / 2 - 40,
      screenHeight / 2 - 100 + 50
    )

    ctx.fillText(
      '得分: ' + score,
      screenWidth / 2 - 40,
      screenHeight / 2 - 100 + 130
    )

    if (personalHighScore) {
      ctx.fillText(
        '最高分: ' + personalHighScore,
        screenWidth / 2 - 40,
        screenHeight / 2 - 100 + 160
      )
    }
    
    ctx.drawImage(
      atlas,
      120, 6, 39, 24,
      screenWidth / 2 - 60,
      screenHeight / 2 - 100 + 180,
      120, 40
    )

    ctx.fillText(
      '重新开始',
      screenWidth / 2 - 40,
      screenHeight / 2 - 100 + 205
    )

    ctx.drawImage(
      atlas,
      243, 6, 39, 24,
      screenWidth / 2 - 60,
      screenHeight / 2 - 100 + 180 + 42,
      120, 40
    )
    ctx.fillStyle = "#f24b57"
    ctx.font = "20px Arial"

    ctx.fillText(
      '充值加速',
      screenWidth / 2 - 40,
      screenHeight / 2 - 100 + 180 + 42 + 26,
    )

    /**
     * 重新开始按钮区域
     * 方便简易判断按钮点击
     */
    this.btnArea = {
      startX: screenWidth / 2 - 40,
      startY: screenHeight / 2 - 100 + 180,
      endX  : screenWidth / 2  + 50,
      endY  : screenHeight / 2 - 100 + 255,
      rechargeX: screenWidth / 2 - 40,
      rechargeY: screenHeight / 2 - 100 + 180 + 42,
      rechargeEndX: screenWidth / 2 + 50,
      rechargeEndY: screenHeight / 2 - 100 + 180 + 42 + 25,
    }
  }
}

