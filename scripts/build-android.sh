#!/bin/bash

# 确保脚本在错误时退出
set -e

# 检查 Python 是否安装
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 未安装，请先安装 Python3"
    exit 1
fi

# 检查是否在项目根目录
if [ ! -f "package.json" ]; then
    echo "❌ 请在项目根目录运行此脚本"
    exit 1
fi

# 检查 Android 目录是否存在
if [ ! -d "android" ]; then
    echo "❌ Android 目录不存在"
    exit 1
fi

# 运行 Python 构建脚本
python3 scripts/build-android.py 