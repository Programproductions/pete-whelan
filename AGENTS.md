# AGENTS.md

Guidance for AI agents working in this repository.

## Repository status

This checkout is a **starter repository**: it currently contains only `README.md` (title: `pete-whelan`). There is no application source, dependency manifests, Docker Compose, CI workflows, or test/lint configuration yet.

When application code is added, update this file with service-specific run instructions.

## Cursor Cloud specific instructions

- **Update script**: No package manager or language toolchain is required until manifests exist (for example `package.json`, `pyproject.toml`, or `go.mod`). The VM update script is a no-op (`true`).
- **Services**: None to start. No ports, databases, or background processes are defined in the repo.
- **Lint / test / build**: No scripts are available until you add tooling (for example ESLint, pytest, or a `Makefile`).
- **Git**: Remote is `origin` → `Programproductions/pete-whelan` on GitHub; default branch is `main`.
- **Hooks**: Only default Git sample hooks under `.git/hooks/`; no Husky, pre-commit, or lint-staged configuration.

After adding a stack, document here:

1. How to install dependencies (non-interactive commands).
2. How to run the dev server(s) and which URLs/ports to use.
3. How to run lint and tests.
4. Any non-obvious environment variables or external services.
