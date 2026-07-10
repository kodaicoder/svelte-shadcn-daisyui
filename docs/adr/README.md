# Architecture Decision Records

This directory contains Architecture Decision Records (ADRs) for the project.

## What is an ADR?

An ADR captures a single architectural decision: the context, the decision, and the consequences. ADRs are lightweight documents that help future developers (and AI agents) understand why the project is structured the way it is.

## Format

Each ADR follows this structure:

```markdown
# ADR-NNNN: Title

## Status
Accepted | Superseded by ADR-XXXX | Deprecated

## Context
What is the issue that we're seeing that is motivating this decision?

## Decision
What is the change that we're proposing and/or doing?

## Consequences
What becomes easier or more difficult to do because of this change?
```

## Naming Convention

Files are named `NNNN-title-with-hyphens.md` (e.g., `0001-use-daisyui-for-theming.md`).

## When to Create an ADR

Create an ADR when:
- Choosing between significant architectural alternatives
- Adopting a new library or framework
- Changing the project structure
- Making a decision that's not obvious from the code

Don't create an ADR for:
- Trivial implementation details
- Decisions that are obvious from context
- Temporary workarounds (track those as issues instead)
