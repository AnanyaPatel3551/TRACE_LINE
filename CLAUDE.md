# Working Agreement

## Git

- I (Claude) may stage and commit changes locally.
- I must NEVER run `git push` or add a git remote (`git remote add`). The user pushes and manages remotes themselves after reviewing.

## Language

- All code is TypeScript.
- The first time a new type appears in a file, it must be followed by a plain-English explanation of what it represents and why it's shaped that way.

## File structure

- Files stay small and single-purpose. Split a file up rather than letting it grow to cover multiple responsibilities.

## Secrets

- No secrets (API keys, tokens, passwords, connection strings) go in code. Use environment variables instead.

## Explaining code to the user

- The user is new to TypeScript.
- Every file I write must be followed by a plain-English, line-by-line explanation of what the file does, written for someone learning TypeScript.
