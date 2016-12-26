# Pokercraft api

## 크롬 익스텐션 설치
[livereload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)

## brew install
``` 
brew install nvm yarn mongodb 
```

## nvm 설정
``` 
# .bashrc 혹은 .bash_profile에 추가 
export NVM_DIR="$HOME/.nvm"
. "/usr/local/opt/nvm/nvm.sh"
```

## node 설치
``` 
nvm install --lts 
```

## npm global로 설치 할 것들
```
npm install -g nodemon bunyan gulp pm2 gulp-cli karma-cli typescript
```

## 프로젝트 초기화
git에서 clone 후 ```npm up``` 혹은 ```yarn``` 실행

## 개발 서버 구동
``` 
gulp serve | bunyan 
```

