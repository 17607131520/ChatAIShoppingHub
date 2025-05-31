#!/usr/bin/env python3
import os
import sys
import subprocess
import shutil
from datetime import datetime

def run_command(command):
    try:
        subprocess.run(command, shell=True, check=True)
        return True
    except subprocess.CalledProcessError as e:
        print(f"Error executing command: {command}")
        print(f"Error: {e}")
        return False

def build_android():
    # 获取当前时间作为版本号后缀
    timestamp = datetime.now().strftime("%Y%m%d_%H%M")
    
    # 项目根目录
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    android_dir = os.path.join(root_dir, 'android')
    
    print("🚀 开始构建 Android 应用...")
    
    # 1. 清理旧的构建文件
    print("🧹 清理旧的构建文件...")
    if not run_command(f"cd {android_dir} && ./gradlew clean"):
        return False
    
    # 2. 生成 Release 版本
    print("📦 生成 Release 版本...")
    if not run_command(f"cd {android_dir} && ./gradlew assembleRelease"):
        return False
    
    # 3. 创建输出目录
    # output_dir = os.path.join(root_dir, 'android-apk')
    output_dir = os.path.join(root_dir, 'build', 'android')
    os.makedirs(output_dir, exist_ok=True)
    
    # 4. 复制并重命名 APK
    apk_path = os.path.join(android_dir, 'app', 'build', 'outputs', 'apk', 'release', 'app-release.apk')
    new_apk_name = f"app-release-{timestamp}.apk"
    new_apk_path = os.path.join(output_dir, new_apk_name)
    
    if os.path.exists(apk_path):
        shutil.copy2(apk_path, new_apk_path)
        print(f"✅ 构建成功！APK 文件位置: {new_apk_path}")
        return True
    else:
        print("❌ 构建失败：未找到 APK 文件")
        return False

if __name__ == "__main__":
    if build_android():
        sys.exit(0)
    else:
        sys.exit(1) 