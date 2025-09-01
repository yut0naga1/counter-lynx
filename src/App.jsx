import { useState, useRef } from '@lynx-js/react';
import './styles.css'; 
export default function App() {
  const [count, setCount] = useState(0);

  // ダブルタップ判定
  const lastTapTimeStampRef = useRef(0);
  const singleTapTimeoutIdRef = useRef(null);
  const DOUBLE_TAP_GAP = 250;

  // -1 ボタンのtapハンドラ
  const handleMinusTap = () => {
    const now = Date.now();
    const gap = now - lastTapTimeStampRef.current; 

    if(gap < DOUBLE_TAP_GAP){
      // ダブルタップと判定する
      if(singleTapTimeoutIdRef.current) {
        // ダブルタップが成立したらシングルタップ予約をキャンセル
        clearTimeout(singleTapTimeoutIdRef.current);
        singleTapTimeoutIdRef.current = null;
      }

      lastTapTimeStampRef.current = 0;
      setCount((c) => c - 10);
      return;
    }
    // シングルタップかもしれない場合は、少し待って確定する。
    lastTapTimeStampRef.current = now;
    singleTapTimeoutIdRef.current = setTimeout(() => {
      setCount((c) => c - 1);
      lastTapTimeStampRef.current = 0;
      singleTapTimeoutIdRef.current = null;
    }, DOUBLE_TAP_GAP);
  };

    // + ボタン: タップで +1
  const handlePlusTap = () => {
    setCount((c) => c + 1);
  };

  // + ボタン: 長押しで +10
  const handlePlusLongPress = () => {
    setCount((c) => c + 10);
  };

  // Reset ボタン
  const handleResetTap = () => {
    setCount(0);
  };


  return (
    <view class="screen">
      <text class="title">Lynx Counter</text>

      <view class="card">
        <text class="label">Count</text>
        <text class="value">{count}</text>

        <view class="row">
          {/* + ボタン: タップで +1、長押しで +10 */}
          <view class="btn" bindtap={handlePlusTap} bindlongpress={handlePlusLongPress}>
            <text>+1 / 長押し+10</text>
          </view>

          {/* - ボタン: タップで -1、ダブルタップで -10 */}
          <view class="btn" bindtap={handleMinusTap}>
            <text>-1 / ダブルタップ-10</text>
          </view>

          {/* Reset ボタン */}
          <view class="btn secondary" bindtap={handleResetTap}>
            <text>Reset</text>
          </view>
        </view>
      </view>

      <text class="hint">
        <text class="code">bindtap</text> はタップ、
        <text class="code">bindlongpress</text> は長押しに使えるみたいですね。
      </text>
    </view>
  );

}