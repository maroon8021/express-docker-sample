FROM node:12.14-stretch-slim
ENV APP_ROOT /app/

WORKDIR $APP_ROOT

# buiid時間の短縮
COPY package.json $APP_ROOT
RUN yarn

# その他ファイルをコピー。
COPY . $APP_ROOT