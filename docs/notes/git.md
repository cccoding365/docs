# Git 介绍与实践指南

> 面向日常开发与团队协作的 Git 介绍和高频实践指南

## 1. Git 是什么

- **定义**：分布式版本控制系统（DVCS），支持多人协作、分支开发、历史追踪与回滚。
- **优势**：分布式、轻量分支、强大历史与合并能力、生态丰富（GitHub/GitLab 等）。

## 2. 基本模型与术语

- **工作区**：当前文件实际状态。
- **暂存区**：待提交快照构建区。
- **本地仓库**：提交历史存储。
- **远程仓库**：公共同步点（默认名 `origin`）。
- **提交（commit）**：一次快照及说明。
- **分支（branch）**：指向提交的指针，常见有 `main`、特性/修复分支。
- **HEAD**：当前检出位置（通常指向某个分支）。

工作流：工作区 → `git add` → 暂存区 → `git commit` → 本地仓库 → `git push` → 远程仓库。

## 3. 安装与最小配置

```bash
# macOS 安装
git --version || brew install git

# 身份配置（必要）
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# 常用偏好
git config --global init.defaultBranch main
git config --global pull.rebase false

# 日志别名（便于查看历史）
git config --global alias.lg "log --graph --decorate --oneline --abbrev-commit"
```

- 凭证建议用 SSH Key：`ssh-keygen -t ed25519 -C "you@example.com"`，添加到平台后测试 `ssh -T git@github.com`。

## 4. 创建/克隆仓库

```bash
# 初始化新仓库
git init
git add .
git commit -m "chore: initial commit"
git remote add origin git@github.com:org/repo.git
git push -u origin main

# 克隆已有仓库
git clone git@github.com:org/repo.git
```

## 5. 日常开发流程（高频）

```bash
# 查看状态/差异
git status
git diff              # 工作区 vs 暂存区
git diff --staged     # 暂存区 vs 上次提交

# 选择性暂存与提交
git add <file>
git add -p            # 按块选择
git commit -m "feat(auth): support SSO"

# 修改最近一次提交（信息或补充文件）
git commit --amend

# 同步远端更新（保持线性历史优先）
git pull --ff-only    # 或团队采用：git pull --rebase

# 推送
git push              # 首次用 -u 绑定上游
```

- 建议使用 Conventional Commits：`feat|fix|docs|refactor|perf|test|chore|revert`，可加范围：`feat(api): ...`。

## 6. 分支与合并（协作核心）

- 分支命名：`feature/<topic>`、`fix/<id>`、`chore/<task>`。
- 推荐 Trunk-Based：特性分支短生命周期，频繁同步 `main`。

```bash
# 创建/切换
git switch -c feature/search-api
git switch main

# 基于最新 main 重放（冲突更易逐步解决）
git fetch origin
git rebase origin/main
# 冲突解决后
git rebase --continue

# 合并到 main
git switch main
# 方式一：保持线性（已 rebase 后）
git merge --ff-only feature/search-api
# 方式二：保留分支节点
git merge --no-ff feature/search-api
```

## 7. Pull Request（PR）最佳实践

- PR 小而清晰：说明动机、变更范围、测试证据。
- 启用 CI、必需 Review、保护主分支（禁止直接推送、强制状态检查）。
- 整理历史：

```bash
# 针对历史中的某提交快速生成修正提交
git commit --fixup=<commit>
# 自动压缩整理到目标分支基线
git rebase -i --autosquash origin/main
```

## 8. 暂存与临时保存

```bash
# 临时保存未提交更改（不污染历史）
git stash push -m "WIP: temp" --include-untracked
# 查看/应用
git stash list
git stash apply stash@{0}
# 应用并移除
git stash pop
```

## 9. 回滚与恢复（安全优先）

- 放弃工作区更改：`git restore --worktree --staged <file>`（或旧式 `git checkout -- <file>`）。
- 取消暂存：`git reset HEAD <file>`。
- 回退最近一次提交但保留更改：`git reset --soft HEAD~1`。
- 丢弃到指定提交（危险）：`git reset --hard <commit>`。
- 生成反向提交（推荐用于公共分支）：`git revert <commit>`。
- 迷路时用：`git reflog` 找回引用点。

## 10. 标签与发布

```bash
# 附注标签（推荐）
git tag -a v1.2.0 -m "release: v1.2.0"
git push origin v1.2.0
```

- 采用语义化版本：`MAJOR.MINOR.PATCH`。

## 11. .gitignore 与行尾

- `.gitignore`：排除构建产物、临时文件、机密等。

```text
# Node
node_modules/
dist/
.env

# macOS
.DS_Store
```

- 行尾统一（推荐在 `.gitattributes` 设置）：

```text
* text=auto eol=lf
*.png binary
*.jpg binary
```

## 12. 常见问题速查

- 合并冲突多：先 `git fetch`，再 `git rebase origin/main` 分批解决；必要时拆分提交。
- 无法 fast-forward：确认远端是否有新提交；选择 rebase 或 merge 统一历史。
- 误删分支/提交：`git reflog` 找回，再 `git branch <name> <reflog-id>`。
- 提交信息不规范：在 CI 中接入 `commitlint` 强制校验。

## 13. 提效小技巧

```bash
# 常用别名（示例）
git config --global alias.co switch
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status

# 交互式 rebase 清理最近历史
git rebase -i HEAD~10

# 记忆冲突解决（重复冲突场景好用）
git config --global rerere.enabled true
```

## 14. 团队最小规范（示例）

- 提交：Conventional Commits，信息简洁聚焦结果与动机。
- 分支保护：
  - `main`：必须通过 CI、至少 1 名 Reviewer、禁止直接推送。
  - 合并策略：统一使用 `rebase + ff-only` 或 `squash` 保持历史整洁。
- 发布流程：
  1. `main` 合并完成 → 2) 打标签 `vX.Y.Z` → 3) 生成 Release Notes → 4) CI 发布产物。

## 15. 推荐工具与资源

- 图形化：Sourcetree、Fork、Tower、GitKraken、VS Code GitLens。
- 学习：Pro Git；交互练习 `https://learngitbranching.js.org`；GitHub/GitLab 官方文档。

---

如需将本指南适配到团队流程（例如强制 rebase、自动化校验提交信息、CI 集成等），可以在此基础上扩展 `.githooks/`、`commitlint`、`semantic-release` 等工具链。
