---
url: /blog/external/ovupif90/index.md
---
## 使用场景

> 业务需要，后端渲染Echarts的Option并生成图片

下载PhantomJS后，定制渲染图片的接口，返回图片的字节流，单独部署成服务，Java后端直接调用接口。

![部署](images\部署.png)

### 使用命令

进入目录：

```bash
# 1. 清理旧缓存
docker system prune -af
# 2. 构建镜像
docker compose build --no-cache
# 3. 启动服务
docker compose up -d
# 4. 查看状态
docker ps
```

### 源码

[Github仓库](https://github.com/Zephyr-Shane/PhantomJS-Service.git)

![代码目录](images\代码目录.png)

![说明](images\说明.png)

## 参考文章
