# Windows Subsystem for Linux with Docker for VSCode on Windows
Windows 10中的WSL(Windows Subsystem for Linux)提供了在Windows主机上使用Ubuntu等子系统的功能，可以解决各类相关问题，更加可以结合到VSCode中提升开发体验。

然而在VSCode on Windows中，其自带的解释器仍然需要使用Windows版本，无法使用同一个环境并提供相应的语法检查，并不利于开发时使用。

## 安装WSL
1. 在`Turn Windows Features on or Off`中启用`Windows Subsystem for Linux`
2. 在`Microsoft Store`中安装`Ubuntu`并完成安装向导

## 集成入VSCode
1. 在`User Settings(JSON)`中添加一条记录
```json
"terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\bash.exe"
```

## 安装Docker-CE
1. 安装一些基础包
```console
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common -y
```
2. 添加 Docker 的官方 GPG 密钥：
```console
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```
3. 添加 Docker 的Stable镜像仓库(`amd64`结构)
```console
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```
4. 更新Repository信息
```console
sudo apt-get update
```
5. 安装Docker-CE
```console
sudo apt-get install docker-ce -y
```
6. 相比在Ubuntu中，WSL只会安装docker-ce的客户端，而不会直接安装`docker daemon`（服务端）， 仍需要安装`Docker for Windows`作为服务器。
    - 下载地址为`https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe`
7. 在`Docker for Windows`中进入Settings, 勾选`Expose daemon on tcp://localhost:2375 without TLS`
    - 代理(可选)： 如果网络状况不理想，可以在Settings中的Proxies页选择使用代理
8. 在WSL中执行以下命令让docker-ce的客户端使用`Docker for Windows`作为服务器
```console
echo "export DOCKER_HOST='tcp://0.0.0.0:2375'" >> ~/.bashrc
source ~/.bashrc
```

## 为WSL设置代理
```console
echo "export http_proxy='http://proxyServerSddress:proxyPort'" >> ~/.bashrc
echo "export https_proxy='https://proxyServerSddress:proxyPort'" >> ~/.bashrc
source ~/.bashrc
```
