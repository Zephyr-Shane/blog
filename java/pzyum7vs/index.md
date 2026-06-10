---
url: /blog/java/pzyum7vs/index.md
---
# Java 进阶完整学习路线（从入门后进阶 → 高级工程师/架构师，分阶段、含知识点、学习顺序、实战建议）

整体分为 **5大阶段**，循序渐进，兼顾**基础夯实、框架深耕、中间件、分布式、架构&软技能**，适配职场晋升（初级→中级→高级→架构师）。

## 第一阶段：Java 核心深度夯实（进阶地基，必学）

目标：吃透JVM、并发、集合、IO、新特性，解决线上底层问题，摆脱“只会API调用”。

### 1. 集合框架（深挖原理+源码）

* 核心：`HashMap/ConcurrentHashMap` 底层、哈希冲突、JDK7/JDK8 区别
* 常用容器：ArrayList、LinkedList、HashSet、TreeMap、Queue、Deque
* 知识点：扩容机制、线程安全、迭代器、fail-fast、JDK8 集合新方法
* 实战：手写简易HashMap、分析集合性能场景选型

### 2. Java 多线程 & 并发编程（进阶重中之重）

1. 基础：线程创建、生命周期、常用API、守护线程、线程优先级
2. 锁体系：
   * 悲观锁/乐观锁、公平锁/非公平锁、可重入锁
   * `synchronized` 底层（对象头、监视器锁、偏向锁/轻量级/重量级锁、锁升级）
   * `Lock`、ReentrantLock、ReadWriteLock、StampedLock
3. 并发工具：
   * 线程池：`ThreadPoolExecutor` 七大参数、拒绝策略、核心原理、实际业务配置
   * 工具类：CountDownLatch、CyclicBarrier、Semaphore、Exchanger
   * 原子类：AtomicXXX、CAS、ABA问题、解决方案
4. 并发模型：volatile、指令重排、内存可见性、JMM（Java内存模型）
5. 高阶：ThreadLocal、线程死锁排查、并发安全场景实战

### 3. JVM 虚拟机（性能调优、OOM排查必备）

1. 基础结构：运行时数据区（堆、栈、方法区、程序计数器、本地方法栈）
2. 内存模型：堆内存划分（新生代/老年代/元空间）、对象创建流程、对象访问定位
3. 垃圾回收 GC：
   * 判定垃圾：引用计数、可达性分析
   * 四大引用：强/软/弱/虚引用
   * 经典GC算法：标记清除、复制、标记整理、分代收集
   * 主流收集器：Serial、Parallel、CMS、G1、ZGC、Shenandoah 特点与选型
4. 类加载：双亲委派模型、类加载时机、自定义类加载器
5. 调优&排查：
   * 常见OOM、栈溢出场景
   * 常用命令：jps、jstat、jmap、jhat、jstack、jhsdb
   * 内存泄漏排查、线上GC调优实战

### 4. IO & NIO（网络编程基础）

* BIO、NIO、AIO 区别、适用场景
* NIO 核心：Buffer、Channel、Selector、多路复用
* Netty 前置基础（本阶段只学原生NIO）

### 5. Java 8+ 新特性（工程必备，主流生产版本）

* Lambda 表达式、函数式接口、Stream 流式编程
* Optional、接口默认方法、重复注解
* JDK9~JDK17 重点：模块化、Record、密封类、虚拟线程、新日期API
* 实战：用Stream重构旧代码、日期工具封装

## 第二阶段：主流框架深耕（企业业务开发核心）

目标：熟练使用框架 + **吃透源码、原理、扩展点**，能解决框架踩坑、自定义组件。

### 1. Spring 全家桶（优先级最高）

#### （1）Spring Core（核心）

* IOC 容器：Bean 生命周期、作用域、循环依赖、Bean 注册&加载流程
* 依赖注入、Bean 后置处理器、工厂Bean
* AOP：动态代理（JDK/CGLIB）、切面、通知、切点、AOP应用场景（日志、权限、事务）
* 事务：Spring 事务传播机制、隔离级别、失效场景（高频面试+实战）

#### （2）Spring MVC

* 整体执行流程：请求分发、适配器、视图解析器、参数绑定、全局异常处理
* 拦截器、过滤器、跨域处理、RESTful 接口设计

#### （3）Spring Boot（目前主流开发框架）

* 自动配置原理：SPI、条件注解、starter 机制
* 内嵌容器（Tomcat/Jetty/Undertow）配置、外部化配置、多环境切换
* 监控：Actuator、Spring Boot Admin
* 实战：自定义Starter、全局异常统一处理、接口加密、优雅停机

#### （4）Spring Cloud / Spring Cloud Alibaba（微服务必学）

微服务基础理论：服务拆分、领域边界、单体 vs 微服务
核心组件：

* 注册中心：Nacos / Eureka / Consul
* 配置中心：Nacos / Apollo / Spring Cloud Config
* 网关：Spring Cloud Gateway（重点，替代Zuul）、路由、过滤器、限流熔断
* 服务调用：OpenFeign、Loadbalancer 负载均衡
* 熔断降级：Sentinel、Resilience4j
* 链路追踪：SkyWalking、Sleuth+Zipkin
* 消息驱动：Spring Cloud Stream

### 2. 持久层框架

* MyBatis：核心流程、动态SQL、插件机制、一级/二级缓存、分页插件、多数据源
* MyBatis-Plus：常用功能、条件构造器、逻辑删除、乐观锁、自动填充、多租户
* JPA（选学）：简单CRUD快速开发，了解即可

### 3. 辅助工具框架

* Lombok、Hutool、MapStruct、EasyExcel、POI（文件处理）
* Validator 接口参数校验、国际化

## 第三阶段：数据库进阶（业务+调优+分库分表）

目标：告别基础CRUD，掌握**MySQL深度优化、事务、锁、分库分表**，应对大数据量场景。

### 1. MySQL 深度原理

* 存储引擎：InnoDB 为主，MyISAM 对比
* 索引：B+树索引、聚簇/非聚簇索引、联合索引、索引失效场景、索引设计原则
* 事务四大特性ACID、事务隔离级别、MVCC 多版本并发控制（核心）
* InnoDB 锁：行锁、表锁、意向锁、Gap锁、临键锁、死锁分析

### 2. SQL 优化

* 慢查询定位、explain 执行计划详解
* 大SQL优化、分页优化、关联查询优化、避免隐式转换

### 3. 高阶数据库方案

* 主从复制、读写分离、主从延迟解决方案
* 分库分表：垂直拆分、水平拆分、分片规则
* 中间件：Sharding-JDBC、MyCat 实操
* 分布式事务：CAP、BASE、最终一致性；2PC、TCC、SAGA、本地消息表、Seata

### 4. 其他数据库（选学，按需）

* Redis（必学，下阶段重点）、MongoDB、Elasticsearch

## 第四阶段：中间件 & 分布式技术栈（中高级工程师分水岭）

企业中大型项目必备，**面试高频、线上问题集中区**，按学习顺序排列：

### 1. Redis（缓存王者，必学）

1. 基础：5大基本数据类型、特殊类型（Geo、Bitmap、HyperLogLog、Stream）
2. 底层：数据结构、持久化（RDB/AOF）
3. 核心场景：
   * 缓存使用、缓存三大问题：**缓存穿透、击穿、雪崩** 解决方案
   * 分布式锁（Redis实现、Redisson 重点）
   * 限流、计数器、排行榜、消息队列、延时队列
4. 集群：主从、哨兵、Redis Cluster 集群原理、槽位分配、故障转移
5. 实战：Redisson 整合SpringBoot、缓存架构设计

### 2. 消息队列（MQ，异步解耦必备）

主流选型：**RocketMQ / Kafka / RabbitMQ**（优先 RocketMQ/Kafka）

* 基础：消息模型、生产者、消费者、队列、交换机
* 可靠性：消息丢失、重复消费、消息积压问题解决方案
* 高阶：死信队列、延时消息、事务消息、消息幂等
* 集群部署、高可用架构

### 3. 搜索引擎 Elasticsearch（ES）

* 基础：索引、文档、DSL查询、分词器
* 集群、分片、副本、近实时搜索原理
* 场景：全文检索、日志分析、商品搜索
* 整合SpringBoot 实战

### 4. 网络 & 通信框架

* Netty：Reactor 模型、线程模型、编解码、粘包拆包、心跳检测、RPC基础
* HTTP/HTTPS、TCP/IP 协议、三次握手四次挥手

### 5. 分布式核心理论（必背+理解）

* CAP 定理、BASE 理论、最终一致性
* 分布式ID生成方案：雪花算法、UUID、数据库自增、Redis生成ID
* 分布式锁（Redis/ZK/数据库三种实现对比）
* 分布式限流、分布式幂等

## 第五阶段：架构、运维、工程化 & 高阶能力（高级工程师/架构师）

### 1. 微服务架构进阶

* 服务治理：服务监控、告警、日志收集（ELK）、链路追踪
* 服务网格：Service Mesh、Istio（了解）
* 接口设计：RESTful、接口安全、接口版本、接口文档（Swagger/Knife4j）

### 2. DevOps & 容器化（现在职场标配）

* Git：进阶用法、分支规范、GitLab CI/CD
* Docker：镜像、容器、Dockerfile、仓库、网络、数据卷
* Kubernetes(K8s)：Pod、Deployment、Service、ConfigMap、命名空间（进阶岗必学）
* 持续集成/持续部署：Jenkins、流水线搭建

### 3. 性能压测 & 全链路调优

* 压测工具：JMeter、Gatling
* 全链路压测、接口性能优化、服务降级、限流、熔断体系设计
* 线上故障复盘、应急处理

### 4. 设计模式 & 代码架构能力

1. 23种设计模式：重点掌握**单例、工厂、代理、适配器、装饰器、观察者、策略、模板方法、责任链**
2. 实战：框架中设计模式应用、业务场景选型
3. 代码规范、DDD 领域驱动设计（复杂业务架构必备）、代码重构

### 5. RPC 框架（分布式服务通信）

* 主流：Dubbo、gRPC、Thrift
* 原理：注册发现、序列化、负载均衡、容错机制
* Dubbo 源码核心、SPI 机制

### 6. 云原生 & 前沿技术（架构师加分）

* 云原生理念、Serverless
* GraalVM 原生镜像、Java 虚拟线程
* 低代码、AI 集成（Spring AI）

***

# 配套学习规划（时间参考 + 学习建议）

## 一、阶段时长（每日2~3小时业余学习）

1. Java核心深度：**1.5~2个月**（集合、并发、JVM 是难点，多敲代码+看源码）
2. 框架体系：**2~3个月**（Spring全家桶+MyBatis为主）
3. 数据库进阶：**1个月**（MySQL优化+分库分表）
4. 中间件分布式：**2~3个月**（Redis、MQ、ES 逐个攻破）
5. 架构&工程化：**2~4个月**（视目标深浅调整）

> 整体完整进阶：**6~12个月** 可达到 Java 高级工程师水平

## 二、学习原则（避坑关键）

1. **先会用，再啃原理源码**：不要一上来死磕源码，先跑通业务功能
2. **每学一个技术，必须做实战项目**：拒绝只看视频不敲代码
3. **重点攻克难点**：JVM、并发、MySQL锁、分布式问题（面试&涨薪核心）
4. **积累问题库**：把踩过的坑、报错、调优方案整理笔记

## 三、实战项目推荐（递进式）

1. 基础项目：传统SSM/SpringBoot 后台管理系统（练CRUD+框架）
2. 中级项目：电商单体项目（MySQL优化、缓存、异步MQ）
3. 高级项目：**微服务电商/支付系统**（Spring Cloud Alibaba + Redis + MQ + ES + 分库分表 + 分布式事务）
4. 架构项目：网关集群、全链路监控、容器化部署整套流程

## 四、面试&求职方向指引

* **中级Java开发**：侧重 集合、并发、Spring、MySQL、Redis
* **高级Java开发**：侧重 JVM调优、并发底层、分布式问题、MQ、微服务治理
* **架构师**：侧重 架构设计、分库分表、分布式事务、服务治理、云原生、DDD

***

# 精简速记版（快速查阅路线）

Java核心(集合→并发→JVM→NIO→JDK新特性)
→ 框架(Spring→SpringBoot→SpringCloud→MyBatis)
→ 数据库(MySQL优化→主从→分库分表→分布式事务)
→ 中间件(Redis→MQ→ES→Netty)
→ 分布式理论(分布式ID/锁/限流/幂等)
→ 架构能力(设计模式→DDD→RPC→容器Docker/K8s→DevOps→性能调优)
