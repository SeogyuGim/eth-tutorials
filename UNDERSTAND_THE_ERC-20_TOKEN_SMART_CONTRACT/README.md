## UNDERSTAND THE ERC-20 TOKEN SMART CONTRACT

> 이더리움 공식 홈페이지 튜토리얼을 보고 작업한 내용입니다. <br>오른쪽의 링크에서 참고하시면 됩니다. [Tutorial Link](https://ethereum.org/en/developers/tutorials/understand-the-erc-20-token-smart-contract/)

### ERC20 인터페이스 설명

### GETTERS

1. `function totalSupply() external view returns (uint256);` : 현재 존재하는 토큰의 양을 반환하는 함수. 이 함수는 `getter`이며 `contract`의 `state`를 변경하지 않고 0이 기본 반환값이다. 솔리디티에는 `floats`가 없다는 점을 명심하자. 끄래서 대부분의 토큰들은 18자리 소수잠을 채택했고, 1 토큰에 대해 10^18으로 총 공급과 기타 결과를 반환한다. 모든 토큰이 18개의 소수점이 있는 것은 아니며, 이것은 당신이 토큰을 다룰때 꼭 주의해야할 점이다.

2. `function balanceOf(address account) external view returns (uint256);` : 주소(계좌)가 소유한 토큰량을 반환하는 함수. 이 함수는 `getter`이며 `contract`의 `state`를 변경하지 않고 0이 기본 반환값이다.

3. `function allowance(address owner, address spender) external view returns (uint256);` : ERC20 표준은 한 address의 토큰들을 또 다른 address가 검색할 수 있도록 허용한다. 이 getter는 "spender"가 "owner"를 대신하여 사용할 수 있는 토큰의 남은 갯수를 반환한다. 이 함수는 `getter`이며 `contract`의 `state`를 변경하지 않고 0이 기본 반환값이다.

### FUNCITONS

4. `function transfer(address recipient, uint256 amount) external returns (bool); ` : 함수 호출자 주소(msg.sender)에서 받는 사람 주소로 토큰 양을 이동합니다. 이 함수는 나중에 정의된 Transfer 이벤트를 내보냅니다. 전송이 가능한 경우 true를 반환합니다.

5. `function approve(address spender, uint256 amount) external returns (bool); ` : 함수 호출자(`msg.sender`) 잔액에서 지출자가 이체할 수 있는 `allowance`을 설정합니다. 이 함수는 승인 이벤트를 발생시킵니다. 이 함수는 허용량이 성공적으로 설정되었는지 여부를 반환합니다.

6. `function transferFrom(address sender, address recipient, uint256 amount) external returns (bool); ` : 허용 메커니즘을 사용하여 `sender`에서 `recipient`로 토큰 양을 이동합니다. 금액은 발신자 수당에서 공제됩니다. 이 함수는 `Transfer` 이벤트를 내보냅니다.

### EVENTS

7. `event Transfer(address indexed from, address indexed to, uint256 value); ` : 이 이벤트는 `from address`에서 `to address`로 토큰(`values`)의 양을 보낼 때 발생합니다. 새 토큰을 발행하는 경우 전송은 일반적으로 0x00..0000 주소에서 이루어지며 토큰을 소각하는 경우 전송은 0x00..0000입니다.

8. `event Approval(address indexed owner, address indexed spender, uint256 value); ` : 이 이벤트는 토큰(`value`)을 `spender`가 사용하는 것을 `owner`가 승인했을 때 발생한다.
